"use client";

import { useState } from "react";

export default function LinkVerifier() {
  const [url, setUrl] = useState("");
  const [result, setResult] = useState<null | { status: string; message: string }>(null);

  const suspiciousWords = ["emprego", "job", "visa", "free", "ganhar", "dinheiro", "lotaria"];
  const badDomains = [".xyz", ".tk", ".ru", ".biz"];

  function verifyLink() {
    if (!url.trim()) return;

    let message = "Este site parece seguro.";
    let status = "safe";

    if (!url.startsWith("https://")) {
      message = "⚠️ O site não usa HTTPS, pode não ser seguro.";
      status = "warning";
    }

    if (suspiciousWords.some(w => url.toLowerCase().includes(w))) {
      message = "⚠️ O link contém termos suspeitos. Verifique se é uma vaga real.";
      status = "warning";
    }

    if (badDomains.some(d => url.toLowerCase().endsWith(d))) {
      message = "❌ Este domínio é suspeito. Evite clicar neste link.";
      status = "danger";
    }

    setResult({ status, message });
  }

  return (
    <div className="max-w-xl mx-auto text-center space-y-6">
      <h2 className="text-2xl font-bold text-indigo-700">Verifique um Link</h2>
      <p className="text-gray-600">Cole aqui o link de uma vaga ou site e veja se é seguro:</p>

      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Ex: https://oferta-emprego.com"
          className="flex-1 border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
          value={url}
          onChange={e => setUrl(e.target.value)}
        />
        <button
          onClick={verifyLink}
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
        >
          Verificar
        </button>
      </div>

      {result && (
        <div
          className={`mt-4 p-4 rounded-lg ${
            result.status === "safe"
              ? "bg-green-100 text-green-700"
              : result.status === "warning"
              ? "bg-yellow-100 text-yellow-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {result.message}
        </div>
      )}
    </div>
  );
}
