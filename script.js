const endOfYear = new Date(new Date().getFullYear(), 11, 31, 23, 59, 59);
const endTime = Math.floor(endOfYear.getTime() / 1000);

// เริ่มนับถอยหลัง
const flipdown = new FlipDown(endTime)
  .start()
  .ifEnded(() => {
    document.getElementById('roundedText').textContent = "🎆 สวัสดีปีใหม่!";
  });

// แสดงข้อความ "เหลืออีกกี่วัน"
function updateRoundedDays() {
  const now = new Date();
  const diffMs = endOfYear - now;
  const roundedDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24));
  if (diffMs > 0) {
    document.getElementById('roundedText').textContent =
      `⏳ เหลือเวลาอีกประมาณ ${roundedDays} วัน จนถึงปีใหม่`;
  }
}

updateRoundedDays();
setInterval(updateRoundedDays, 1000);

// พลุทุก 5 วินาที
setInterval(() => {
  confetti({
    particleCount: 80,
    spread: 70,
    origin: { y: 0.6 }
  });
}, 5000);
