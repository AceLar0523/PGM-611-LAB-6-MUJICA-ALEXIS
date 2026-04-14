import './Controls.scss'

interface ControlsProps {
    onColor: (color: string) => void;
    onMetal: (metal: number) => void;
    metal: number;
    viewMode: 'all' | 'single';
    onViewModeChange: (mode: 'all' | 'single') => void;
    selectedFigure: string;
    onSelectedFigureChange: (figure: string) => void;
    onAddFigure: () => void;
    onRemoveFigure: () => void;
    currentFigureCount: number;
    figureOptions: readonly string[];
}

const labelMap: Record<string, string> = {
    sphere: 'Esfera',
    cube: 'Cubo',
    capsule: 'Capsula',
    dodecahedron: 'Dodecaedro',
    tetrahedron: 'Tetraedro',
    octahedron: 'Octaedro',
    icosahedron: 'Icosaedro',
};

export const Controls = ({
    onColor,
    onMetal,
    metal,
    viewMode,
    onViewModeChange,
    selectedFigure,
    onSelectedFigureChange,
    onAddFigure,
    onRemoveFigure,
    currentFigureCount,
    figureOptions,
}: ControlsProps) => {
    return (
        <div className="controls-panel">
            <h3>Configuracion</h3>

            <label className="control-label" htmlFor="view-mode">Modo de visualizacion</label>
            <select
                id="view-mode"
                value={viewMode}
                onChange={(e) => onViewModeChange(e.target.value as 'all' | 'single')}
            >
                <option value="all">Ver todas las figuras</option>
                <option value="single">Ver una figura</option>
            </select>

            {viewMode === 'single' && (
                <>
                    <label className="control-label" htmlFor="figure-select">Figura activa</label>
                    <select
                        id="figure-select"
                        value={selectedFigure}
                        onChange={(e) => onSelectedFigureChange(e.target.value)}
                    >
                        {figureOptions.map((figure) => (
                            <option key={figure} value={figure}>
                                {labelMap[figure] ?? figure}
                            </option>
                        ))}
                    </select>

                    <div className="figure-counter">
                        <span>Cantidad: {currentFigureCount}</span>
                        <div className="counter-buttons">
                            <button type="button" onClick={onRemoveFigure} aria-label="Quitar figura">-</button>
                            <button type="button" onClick={onAddFigure} aria-label="Agregar figura">+</button>
                        </div>
                    </div>
                </>
            )}

            <label className="control-label" htmlFor="metal-range">Metalness</label>
            <div className="color-group">
                {['#ffffff', '#00ff00', '#0000ff'].map((c) => (
                    <button
                        key={c}
                        onClick={() => onColor(c)}
                        style={{ backgroundColor: c }}
                        aria-label={`Cambiar color a ${c}`}
                    />
                ))}
            </div>
            <input
                id="metal-range"
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={metal}
                onChange={(e) => onMetal(parseFloat(e.target.value))}
            />
        </div>
    );
};