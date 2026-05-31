"use client";

export default function BackgroundEffects() {
  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 0 }}
      aria-hidden
    >
      <style>{`
        @keyframes drift1 {
          0%,100% { transform: translate(0px, 0px) scale(1); }
          33%      { transform: translate(60px, -40px) scale(1.1); }
          66%      { transform: translate(-30px, 50px) scale(0.95); }
        }
        @keyframes drift2 {
          0%,100% { transform: translate(0px, 0px) scale(1); }
          40%      { transform: translate(-70px, 30px) scale(1.05); }
          70%      { transform: translate(40px, -60px) scale(1.1); }
        }
        @keyframes drift3 {
          0%,100% { transform: translate(0px, 0px) scale(1); }
          30%      { transform: translate(50px, 60px) scale(0.9); }
          60%      { transform: translate(-60px, -30px) scale(1.1); }
        }
        @keyframes drift4 {
          0%,100% { transform: translate(0px, 0px) scale(1); }
          50%      { transform: translate(-40px, -50px) scale(1.08); }
        }
      `}</style>

      {/* verde — canto superior esquerdo */}
      <div style={{
        position: "absolute", top: "5%", left: "10%",
        width: 600, height: 600,
        borderRadius: "50%",
        background: "radial-gradient(circle, #6EE7B7 0%, transparent 70%)",
        opacity: 0.07,
        filter: "blur(60px)",
        animation: "drift1 18s ease-in-out infinite",
      }} />

      {/* roxo — centro direito */}
      <div style={{
        position: "absolute", top: "25%", right: "5%",
        width: 700, height: 700,
        borderRadius: "50%",
        background: "radial-gradient(circle, #A78BFA 0%, transparent 70%)",
        opacity: 0.07,
        filter: "blur(70px)",
        animation: "drift2 22s ease-in-out infinite",
      }} />

      {/* azul — centro inferior */}
      <div style={{
        position: "absolute", bottom: "10%", left: "30%",
        width: 650, height: 650,
        borderRadius: "50%",
        background: "radial-gradient(circle, #60A5FA 0%, transparent 70%)",
        opacity: 0.06,
        filter: "blur(65px)",
        animation: "drift3 25s ease-in-out infinite",
      }} />

      {/* verde — canto inferior direito */}
      <div style={{
        position: "absolute", bottom: "5%", right: "15%",
        width: 500, height: 500,
        borderRadius: "50%",
        background: "radial-gradient(circle, #6EE7B7 0%, transparent 70%)",
        opacity: 0.05,
        filter: "blur(55px)",
        animation: "drift4 20s ease-in-out infinite",
      }} />
    </div>
  );
}
