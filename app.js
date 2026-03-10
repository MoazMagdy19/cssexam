const letters = ['أ', 'ب', 'ج', 'د'];
const userAnswers = new Array(mcqData.length).fill(null);

// ===== RENDER MCQ =====
const mcqContainer = document.getElementById('mcq-container');

mcqData.forEach((item, qi) => {
  const card = document.createElement('div');
  card.className = 'question-card';
  card.id = `q-${qi}`;

  const codeBlock = item.code
    ? `<div class="code-snippet">${item.code.replace(/</g,'&lt;').replace(/>/g,'&gt;')}</div>`
    : '';

  card.innerHTML = `
    <div class="q-header">
      <div class="q-num">${qi + 1}</div>
      <div class="q-text">${item.q}</div>
    </div>
    ${codeBlock}
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

// ===== SELECT OPTION =====
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

// ===== PROGRESS =====
function updateProgress() {
  const answered = userAnswers.filter(a => a !== null).length;
  const total    = mcqData.length;
  const pct      = Math.round((answered / total) * 100);

  document.getElementById('prog-fill').style.width = pct + '%';
  document.getElementById('prog-pct').textContent  = pct + '%';
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

  // ---- Build MCQ answers text (no scoring shown to student) ----
  let mcqText = '';
  mcqData.forEach((item, qi) => {
    const ua = userAnswers[qi];
    const chosenText = ua !== null
      ? `${letters[ua]}) ${item.opts[ua]}`
      : '⬜ لم يجب';
    mcqText += `\nس${qi + 1}: ${item.q.substring(0, 50)}...\n   ← ${chosenText}\n`;
  });

  // ---- Build essay answers text ----
  let essayText = '';
  essayData.forEach((item, ei) => {
    const ans = document.getElementById(`essay-${ei}`).value.trim();
    essayText += `\nس${ei + 1} [${item.marks}د]: ${item.q.substring(0, 60)}...\n   ← ${ans || '(لم يُكتب إجابة)'}\n`;
  });

  // ---- WhatsApp message ----
  const msg =
    `🎓 *امتحان CSS — الحصة الرابعة*\n` +
    `━━━━━━━━━━━━━━━━\n` +
    `👤 الاسم: ${name}\n` +
    `📅 التاريخ: ${new Date().toLocaleString('ar-EG')}\n` +
    `━━━━━━━━━━━━━━━━\n` +
    `🎯 *إجابات الاختيار من متعدد:*\n` +
    mcqText +
    `━━━━━━━━━━━━━━━━\n` +
    `✍️ *إجابات الأسئلة المقالية:*\n` +
    essayText +
    `━━━━━━━━━━━━━━━━`;

  const phone = '201099529496';
  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`, '_blank');

  // ---- Show confirm (NO score reveal) ----
  const confirm = document.getElementById('sent-confirm');
  confirm.innerHTML = `
    <div class="confirm-icon">✅</div>
    <h4>تم إرسال إجاباتك!</h4>
    <p>وصلت إجاباتك للمدرس وهيراجعها ويرد عليك بالنتيجة 🎯</p>
  `;
  confirm.classList.add('show');

  // Disable button to prevent double send
  const btn = document.getElementById('send-btn');
  btn.disabled = true;
  btn.innerHTML = `<span>✅ تم الإرسال</span>`;

  confirm.scrollIntoView({ behavior: 'smooth', block: 'center' });
}
