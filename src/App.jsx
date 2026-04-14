import { useState } from 'react'
import {Scene} from './components/3d/Scene'
import {Controls} from './components/ui/Controls'
import { FIGURE_OPTIONS } from './components/3d/figureOptions'
import './App.css'

const VIEW_MODES = {
  ALL: 'all',
  SINGLE: 'single',
}

const ALL_VIEW_POSITIONS = {
  sphere: [-6, 0, 0],
  cube: [-4, 0, 0],
  capsule: [-2, 0, 0],
  dodecahedron: [0, 0, 0],
  tetrahedron: [2, 0, 0],
  octahedron: [4, 0, 0],
  icosahedron: [6, 0, 0],
}

const buildSinglePositions = (count) => {
  const positions = []
  const columns = 4
  const spacing = 2.4

  for (let i = 0; i < count; i += 1) {
    const col = i % columns
    const row = Math.floor(i / columns)
    const x = (col - (columns - 1) / 2) * spacing
    const z = row * -2.2
    positions.push([x, 0, z])
  }

  return positions
}

function App() {
  const [color, setColor] = useState('#ffffff')
  const [metal, setMetal] = useState(0.5)
  const [viewMode, setViewMode] = useState(VIEW_MODES.ALL)
  const [selectedFigure, setSelectedFigure] = useState('sphere')
  const [singleCounts, setSingleCounts] = useState(() =>
    FIGURE_OPTIONS.reduce((acc, figure) => ({ ...acc, [figure]: 1 }), {})
  )

  const isAllView = viewMode === VIEW_MODES.ALL

  const figures = isAllView
    ? FIGURE_OPTIONS.map((figure) => ({
        id: `all-${figure}`,
        type: figure,
        position: ALL_VIEW_POSITIONS[figure],
      }))
    : buildSinglePositions(singleCounts[selectedFigure]).map((position, index) => ({
        id: `single-${selectedFigure}-${index}`,
        type: selectedFigure,
        position,
      }))

  const addSelectedFigure = () => {
    setSingleCounts((prev) => ({
      ...prev,
      [selectedFigure]: prev[selectedFigure] + 1,
    }))
  }

  const removeSelectedFigure = () => {
    setSingleCounts((prev) => ({
      ...prev,
      [selectedFigure]: Math.max(1, prev[selectedFigure] - 1),
    }))
  }

  return (
    <div className="app-main">
      <Scene
        color={color}
        metalness={metal}
        figures={figures}
        isAllView={isAllView}
      />
      <Controls
        onColor={setColor}
        onMetal={setMetal}
        metal={metal}
        viewMode={viewMode}
        onViewModeChange={setViewMode}
        selectedFigure={selectedFigure}
        onSelectedFigureChange={setSelectedFigure}
        onAddFigure={addSelectedFigure}
        onRemoveFigure={removeSelectedFigure}
        currentFigureCount={singleCounts[selectedFigure]}
        figureOptions={FIGURE_OPTIONS}
      />
    </div>
  )
}

export default App
