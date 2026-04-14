export const FIGURE_OPTIONS = [
    'sphere',
    'cube',
    'capsule',
    'dodecahedron',
    'tetrahedron',
    'octahedron',
    'icosahedron',
] as const;

export type FigureType = (typeof FIGURE_OPTIONS)[number];
