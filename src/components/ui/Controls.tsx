import './Controls.scss'

interface ControlsProps {
    onColor: (color: string) => void;
    onMetal: (metal: number) => void;
    metal: number;
}

export const Controls = ({ onColor, onMetal, metal }: ControlsProps) => {
    return (
        <div className="controls-panel">
            <h3>Configuracion</h3>
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