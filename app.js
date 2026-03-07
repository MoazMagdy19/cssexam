const letters = ['أ', 'ب', 'ج', 'د'];
const userAnswers = new Array(mcqData.length).fill(null);

const mcqContainer = document.getElementById('mcq-container');

mcqData.forEach((item, qi) => {
  const card = document.createElement('div');
  card.className = 'question-card';
  card.id = `q-${qi}`;

  card.innerHTML = `
    <div class="q-header">
      <div class="q-num">${qi + 1}</div>
      <div class="q-text">${item.q}</div>
    </div>
    <div class="q-options">
      ${item.opts.map((opt, oi) => `
        <label class="option-label" id="opt-${qi}-${oi}" onclick="selectOption(${qi}, ${oi})">
          <input type="radio" name="q${qi}" value="${oi}">
          <div class="option-dot"></div>
          <span>${letters[oi]}) ${opt}</span>
        </label>
      `).join('')}
    </div>
  `;

  mcqContainer.appendChild(card);
});

// ===== RENDER ESSAY =====
const essayContainer = document.getElementById('essay-container');

essayData.forEach((item, ei) => {
  const card = document.createElement('div');
  card.className = 'essay-card';

  card.innerHTML = `
    <div class="essay-q-header">
      <div class="essay-num">${ei + 1}</div>
      <div>
        <div class="essay-q-text">${item.q}</div>
        <span class="essay-marks">📊 ${item.marks} درجة</span>
      </div>
    </div>
    <div class="essay-body">
      <textarea id="essay-${ei}" placeholder="اكتب إجابتك هنا..."></textarea>
    </div>
  `;

  essayContainer.appendChild(card);
});


function selectOption(qi, oi) {
  userAnswers[qi] = oi;

  for (let i = 0; i < 4; i++) {
    const el = document.getElementById(`opt-${qi}-${i}`);
    if (el) el.classList.remove('selected');
  }

  const selected = document.getElementById(`opt-${qi}-${oi}`);
  if (selected) selected.classList.add('selected');

  const card = document.getElementById(`q-${qi}`);
  if (card) card.classList.add('answered');

  updateProgress();
}


function updateProgress() {
  const answered = userAnswers.filter(a => a !== null).length;
  const total = mcqData.length;
  const pct = Math.round((answered / total) * 100);

  document.getElementById('prog-fill').style.width = pct + '%';
  document.getElementById('prog-pct').textContent = pct + '%';
  document.getElementById('prog-text').textContent =
    answered === 0
      ? 'لم تجب على أي سؤال بعد'
      : `أجبت على ${answered} من ${total} سؤال`;
}

// ===== SUBMIT =====
function submitExam() {
  const name = document.getElementById('student-name').value.trim();
  if (!name) {
    alert('من فضلك أدخل اسمك أولاً ✍️');
    return;
  }

  // Score MCQ
  let correct = 0;
  mcqData.forEach((item, qi) => {
    const ua = userAnswers[qi];
    for (let i = 0; i < 4; i++) {
      const el = document.getElementById(`opt-${qi}-${i}`);
      if (!el) continue;
      el.classList.remove('selected', 'correct', 'wrong');
      if (i === item.ans) {
        el.classList.add('correct');
      } else if (ua === i && ua !== item.ans) {
        el.classList.add('wrong');
      }
    }
    if (ua === item.ans) correct++;
  });

  const unanswered = userAnswers.filter(a => a === null).length;
  const mcqScore = (correct * 1.5).toFixed(1);

  // Collect essay answers
  let essayText = '';
  essayData.forEach((item, ei) => {
    const ans = document.getElementById(`essay-${ei}`).value.trim();
    if (ans) {
      essayText += `\n📌 سؤال ${ei + 1}: ${ans.substring(0, 80)}${ans.length > 80 ? '...' : ''}`;
    }
  });

  // Show result banner
  const banner = document.getElementById('result-banner');
  const level = correct >= 21 ? 'good' : correct >= 12 ? 'medium' : 'low';
  const emoji  = correct >= 21 ? '🎉' : correct >= 12 ? '💪' : '📚';
  const color  = correct >= 21 ? '#16a34a' : correct >= 12 ? '#ca8a04' : '#dc2626';

  banner.className = 'show ' + level;
  banner.innerHTML = `
    <div class="result-score" style="color:${color}">${correct}/30</div>
    <div class="result-label">
      ${emoji} درجة MCQ: ${mcqScore}/45 — إجابات صحيحة: ${correct} | خاطئة: ${30 - correct - unanswered} | لم تجب: ${unanswered}
    </div>
  `;

  // Build WhatsApp message
  const msg =
    `🎓 *امتحان CSS - الحصتان الأولى والثانية*\n` +
    `━━━━━━━━━━━━━━━━\n` +
    `👤 الاسم: ${name}\n` +
    `━━━━━━━━━━━━━━━━\n` +
    `📊 *نتيجة MCQ:*\n` +
    `✅ إجابات صحيحة: ${correct} / 30\n` +
    `❌ إجابات خاطئة: ${30 - correct - unanswered}\n` +
    `⬜ لم يجب عليها: ${unanswered}\n` +
    `📈 درجة MCQ: ${mcqScore} / 45\n` +
    `━━━━━━━━━━━━━━━━\n` +
    `✍️ *ملخص الأسئلة المقالية:*${essayText || '\n(لم تُكتب إجابات)'}\n` +
    `━━━━━━━━━━━━━━━━\n` +
    `📅 وقت الإرسال: ${new Date().toLocaleString('ar-EG')}`;

  const phone = '201099529496';
  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`, '_blank');

  banner.scrollIntoView({ behavior: 'smooth', block: 'center' });
}
