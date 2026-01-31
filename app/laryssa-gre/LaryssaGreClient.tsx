'use client'

import { useState, useEffect } from 'react'

export default function LaryssaGreClient() {
    // State for inputs
    const [totalAlunos, setTotalAlunos] = useState<number | ''>('')
    const [pctAval, setPctAval] = useState<number>(30)
    const [minAceit, setMinAceit] = useState<number>(100)
    const [pctPequena, setPctPequena] = useState<number>(30)
    const [pctMedia, setPctMedia] = useState<number>(20)
    const [pctGrande, setPctGrande] = useState<number>(10)

    // State for outputs
    const [outAval, setOutAval] = useState<number | null>(null)
    const [outEduc, setOutEduc] = useState<number | null>(null)
    const [outAceit, setOutAceit] = useState<number | null>(null)
    const [porte, setPorte] = useState<'pequena' | 'media' | 'grande' | null>(null)
    const [showAviso, setShowAviso] = useState(false)

    // Derived state for display
    const [pctEducUsed, setPctEducUsed] = useState<number | null>(null)

    const calculate = () => {
        const total = typeof totalAlunos === 'number' ? totalAlunos : 0

        // Determine Porte
        let currentPorte: 'pequena' | 'media' | 'grande' = 'pequena'
        if (total <= 100) currentPorte = 'pequena'
        else if (total <= 599) currentPorte = 'media'
        else currentPorte = 'grande'
        setPorte(currentPorte)

        // Determine Pct Educ based on Porte
        let currentPctEduc = 0
        if (currentPorte === 'pequena') currentPctEduc = pctPequena
        else if (currentPorte === 'media') currentPctEduc = pctMedia
        else currentPctEduc = pctGrande
        setPctEducUsed(currentPctEduc)

        // Calculate Values
        const valAval = Math.ceil(total * (pctAval / 100))
        const valEduc = Math.ceil(total * (currentPctEduc / 100))
        const valAceit = Math.max(minAceit, 0)

        // Update Outputs
        setOutAval(total > 0 ? valAval : null)
        setOutEduc(total > 0 ? valEduc : null)
        setOutAceit(total > 0 ? valAceit : null)

        // Warning Logic
        if (total > 0 && total < valAceit) {
            setShowAviso(true)
        } else {
            setShowAviso(false)
        }
    }

    const clear = () => {
        setTotalAlunos('')
        setPctAval(30)
        setMinAceit(100)
        setPctPequena(30)
        setPctMedia(20)
        setPctGrande(10)
        setOutAval(null)
        setOutEduc(null)
        setOutAceit(null)
        setPorte(null)
        setShowAviso(false)
        setPctEducUsed(null)
    }

    // Effect to run calculation when inputs change
    useEffect(() => {
        calculate()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [totalAlunos, pctAval, minAceit, pctPequena, pctMedia, pctGrande])

    // Number formatter
    const fmtInt = (n: number) => {
        try {
            return new Intl.NumberFormat('pt-BR').format(n)
        } catch (e) {
            return String(n)
        }
    }

    return (
        <div className="min-h-screen font-sans text-[#2f3941] leading-snug" style={{
            backgroundColor: '#fcf9f4',
            backgroundImage: `
                radial-gradient(1200px 600px at 85% -10%, #c7d8ff 0%, transparent 50%),
                radial-gradient(1000px 500px at -10% 110%, #ffd8a8 0%, transparent 50%)
            `,
            '--brand': '#8cccad', // Verde pastel para botões
            '--ring': '#bfe4cf',
        } as React.CSSProperties}>
            <div className="max-w-[900px] mx-auto px-4 py-8 sm:p-8">

                <header className="grid gap-1.5 mb-5">
                    <div>
                        <span className="inline-flex items-center gap-2 bg-white border border-[#eae7e2] px-3 py-1.5 rounded-full text-xs text-[#6b7278]">
                            🥗 Calculadora Nutricional Escolar
                        </span>
                    </div>
                    <div className="text-2xl sm:text-3xl font-extrabold tracking-tight">Planejamento GRE</div>
                    <div className="text-[#6b7278] text-sm sm:text-base">
                        Informe o número total de alunos. O porte da escola será detectado automaticamente conforme as regras.
                    </div>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-4 items-start">

                    {/* COLUNA ESQUERDA: ENTRADAS */}
                    <div className="bg-white border border-[#eae7e2] rounded-[18px] shadow-[0_10px_24px_rgba(0,0,0,0.04)]">
                        <div className="p-[18px]">
                            <h2 className="m-0 mb-2 text-xs uppercase tracking-wider text-[#6b7278] font-bold">Dados de entrada</h2>
                            <label htmlFor="totalAlunos" className="block font-semibold mb-2">Número total de alunos</label>
                            <input
                                id="totalAlunos"
                                type="number"
                                min="0"
                                step="1"
                                placeholder="Ex.: 850"
                                className="w-full p-3 border border-[#eae7e2] rounded-xl bg-white text-base outline-none focus:border-[#8cccad] focus:ring-4 focus:ring-[#bfe4cf] transition-all"
                                value={totalAlunos}
                                onChange={(e) => setTotalAlunos(e.target.value === '' ? '' : parseInt(e.target.value))}
                            />
                            <div className="text-xs text-[#6b7278] mt-2">Use números inteiros. Valores fracionados serão arredondados.</div>
                        </div>

                        <div className="p-[18px] border-t border-dashed border-[#eae7e2]">
                            <details className="group">
                                <summary className="cursor-pointer font-bold text-[#0e3323] list-none select-none flex items-center">
                                    ⚙️ Ajustar regras <span className="text-xs font-normal text-[#6b7278] ml-2">(toque para abrir)</span>
                                </summary>

                                <div className="mt-4 space-y-3">
                                    {/* Avaliação e Aceitabilidade */}
                                    <div className="grid grid-cols-2 gap-3">
                                        <div>
                                            <label htmlFor="pctAval" className="block text-xs font-semibold mb-1 text-[#6b7278]">Avaliação nutricional %</label>
                                            <input
                                                id="pctAval"
                                                type="number"
                                                min="0"
                                                max="100"
                                                className="w-full p-2 border border-[#eae7e2] rounded-xl text-right outline-none focus:border-[#8cccad] focus:ring-4 focus:ring-[#bfe4cf]"
                                                value={pctAval}
                                                onChange={(e) => setPctAval(parseFloat(e.target.value))}
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="minAceit" className="block text-xs font-semibold mb-1 text-[#6b7278]">Teste aceitab. min</label>
                                            <input
                                                id="minAceit"
                                                type="number"
                                                min="0"
                                                className="w-full p-2 border border-[#eae7e2] rounded-xl text-right outline-none focus:border-[#8cccad] focus:ring-4 focus:ring-[#bfe4cf]"
                                                value={minAceit}
                                                onChange={(e) => setMinAceit(parseInt(e.target.value))}
                                            />
                                        </div>
                                    </div>

                                    {/* Educação alimentar por porte */}
                                    <div className="grid grid-cols-3 gap-3 bg-white p-3 rounded-xl border border-dashed border-[#eae7e2]">
                                        <div>
                                            <label className="block text-xs text-[#6b7278] mb-1">Pequena %</label>
                                            <input
                                                type="number"
                                                min="0"
                                                max="100"
                                                className="w-full p-1 border border-[#eae7e2] rounded text-right text-sm outline-none focus:border-[#8cccad]"
                                                value={pctPequena}
                                                onChange={(e) => setPctPequena(parseFloat(e.target.value))}
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-xs text-[#6b7278] mb-1">Média %</label>
                                            <input
                                                type="number"
                                                min="0"
                                                max="100"
                                                className="w-full p-1 border border-[#eae7e2] rounded text-right text-sm outline-none focus:border-[#8cccad]"
                                                value={pctMedia}
                                                onChange={(e) => setPctMedia(parseFloat(e.target.value))}
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-xs text-[#6b7278] mb-1">Grande %</label>
                                            <input
                                                type="number"
                                                min="0"
                                                max="100"
                                                className="w-full p-1 border border-[#eae7e2] rounded text-right text-sm outline-none focus:border-[#8cccad]"
                                                value={pctGrande}
                                                onChange={(e) => setPctGrande(parseFloat(e.target.value))}
                                            />
                                        </div>
                                    </div>
                                    <div className="text-center text-xs text-[#6b7278]">Ajuste conforme sua norma/nota técnica.</div>
                                </div>
                            </details>
                        </div>

                        <div className="p-[18px] border-t border-dashed border-[#eae7e2] flex gap-3">
                            <button
                                onClick={calculate}
                                className="bg-[#8cccad] text-[#0e3323] font-extrabold py-3 px-4 rounded-xl shadow-[0_6px_16px_rgba(60,140,100,0.25)] hover:shadow-none hover:translate-y-[1px] transition-all flex-1 md:flex-none"
                            >
                                Calcular
                            </button>
                            <button
                                onClick={clear}
                                className="bg-white text-[#2f3941] border border-dashed border-[#8cccad] font-bold py-3 px-4 rounded-xl hover:bg-gray-50 transition-colors flex-1 md:flex-none"
                            >
                                Limpar
                            </button>
                        </div>
                    </div>

                    {/* COLUNA DIREITA: RESULTADOS */}
                    <div className="bg-white border border-[#eae7e2] rounded-[18px] shadow-[0_10px_24px_rgba(0,0,0,0.04)]">
                        <div className="p-[18px]">
                            <h2 className="m-0 mb-4 text-xs uppercase tracking-wider text-[#6b7278] font-bold">Resultados</h2>

                            {showAviso && (
                                <div className="mb-4 p-3 bg-gradient-to-r from-red-50 to-orange-50 border border-orange-200 rounded-xl text-sm text-[#a05a2c]">
                                    Aviso: o mínimo de <strong>{fmtInt(minAceit)} alunos</strong> para o teste de aceitabilidade excede o total informado ({fmtInt(typeof totalAlunos === 'number' ? totalAlunos : 0)}).
                                </div>
                            )}

                            <div className="space-y-3">
                                {/* Avaliação */}
                                <div className="p-3 bg-white border border-[#eae7e2] rounded-2xl">
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="inline-block px-2 py-1 rounded-full border border-[rgba(0,0,0,0.08)] bg-[#c8ead7] text-xs font-medium">Avaliação nutricional</span>
                                    </div>
                                    <div className="text-2xl sm:text-3xl font-black text-[#0f3b28] tracking-tight">
                                        {outAval !== null ? `${fmtInt(outAval)} alunos` : '—'}
                                    </div>
                                    <div className="text-xs text-[#6b7278]">Usando <span className="font-semibold">{pctAval}%</span> do total.</div>
                                </div>

                                {/* Educação */}
                                <div className="p-3 bg-white border border-[#eae7e2] rounded-2xl">
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="inline-block px-2 py-1 rounded-full border border-[rgba(0,0,0,0.08)] bg-[#ffe8c6] text-xs font-medium">Educação alimentar</span>
                                    </div>
                                    <div className="text-2xl sm:text-3xl font-black text-[#0f3b28] tracking-tight">
                                        {outEduc !== null ? `${fmtInt(outEduc)} alunos` : '—'}
                                    </div>
                                    <div className="text-xs text-[#6b7278]">
                                        Usando <span className="font-semibold">{pctEducUsed !== null ? pctEducUsed : '—'}%</span> do total.
                                        {porte && <span className="font-semibold ml-1 capitalize">({porte})</span>}
                                    </div>
                                </div>

                                {/* Teste */}
                                <div className="p-3 bg-white border border-[#eae7e2] rounded-2xl">
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="inline-block px-2 py-1 rounded-full border border-[rgba(0,0,0,0.08)] bg-[#e7ddff] text-xs font-medium">Teste de aceitabilidade</span>
                                    </div>
                                    <div className="text-2xl sm:text-3xl font-black text-[#0f3b28] tracking-tight">
                                        {outAceit !== null ? `${fmtInt(outAceit)} alunos` : '—'}
                                    </div>
                                    <div className="text-xs text-[#6b7278]">Mínimo de <span className="font-semibold">{minAceit}</span> alunos.</div>
                                </div>
                            </div>
                        </div>
                        <div className="p-[18px] border-t border-dashed border-[#eae7e2]">
                            <div className="text-xs text-[#6b7278]">
                                Arredondamos para cima para garantir amostra suficiente para os padrões da legislação.
                            </div>
                        </div>
                    </div>
                </div>

                <footer className="text-center text-xs text-[#6b7278] mt-8">
                    Laryssa Silva 🥑🥕 — por Matheus Lôbo &copy;
                </footer>
            </div>
        </div>
    )
}
