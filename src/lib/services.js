// Services Data - Central source of truth for all service information

export const services = [
  {
    id: 'architecture',
    slug: 'architecture',
    title: 'Architecture BIM',
    shortDescription: 'Precision 3D modeling for architectural projects with LOD 100-500 support',
    icon: '🏛️',
    features: [
      'LOD 100 to LOD 500 modeling',
      '3D architectural visualization',
      'Floor plans and elevations',
      'Material schedules and specifications',
      'Design coordination and clash detection',
      'As-built documentation'
    ],
  },
  {
    id: 'mep',
    slug: 'mep',
    title: 'MEP BIM',
    shortDescription: 'Mechanical, Electrical, and Plumbing coordination and modeling',
    icon: '⚡',
    features: [
      'HVAC system modeling',
      'Electrical layout and distribution',
      'Plumbing and fire protection',
      'Coordination with architectural models',
      'Clash detection and resolution',
      'Equipment scheduling'
    ],
  },
  {
    id: 'structural',
    slug: 'structural',
    title: 'Structural BIM',
    shortDescription: 'Detailed structural engineering models and documentation',
    icon: '🏗️',
    features: [
      'Concrete and steel structure modeling',
      'Foundation and framing details',
      'Reinforcement detailing',
      'Connection design',
      'Load analysis integration',
      'Coordination with other disciplines'
    ],
  },
  {
    id: '3d-visualization',
    slug: '3d-visualization',
    title: '3D Visualization',
    shortDescription: 'Photorealistic renderings and animations for your projects',
    icon: '🎨',
    features: [
      'Photorealistic exterior renderings',
      'Interior visualization',
      'Walkthrough animations',
      'Virtual reality experiences',
      'Day/night lighting scenarios',
      'Material and texture application'
    ],
  },
  {
    id: 'scan-to-bim',
    slug: 'scan-to-bim',
    title: 'Scan to BIM',
    shortDescription: 'Convert laser scan data into accurate BIM models',
    icon: '📡',
    features: [
      'Point cloud to BIM conversion',
      'As-built documentation',
      'Existing condition modeling',
      'Clash detection with new design',
      'Renovation and retrofit support',
      'Facility management integration'
    ],
  },
  {
    id: 'interior',
    slug: 'interior-documentation',
    title: 'Interior Documentation',
    shortDescription: 'Detailed interior design documentation and modeling',
    icon: '🏠',
    features: [
      'Space planning and layouts',
      'Furniture and fixture modeling',
      'Material and finish schedules',
      'Custom millwork details',
      'Lighting design',
      'Construction documentation'
    ],
  },
  {
    id: 'drafting',
    slug: 'drafting-services',
    title: 'Drafting Services',
    shortDescription: 'Precise 2D CAD drafting and shop drawings',
    icon: '📐',
    features: [
      'Construction drawings',
      'Shop drawings',
      'As-built documentation',
      'Detail drawings',
      'Architectural drafting',
      'Structural drafting'
    ],
  },
  {
    id: '3d-modeling',
    slug: '3d-modeling',
    title: '3D Modeling',
    shortDescription: 'Custom 3D modeling for various applications',
    icon: '🎯',
    features: [
      'Product modeling',
      'Architectural components',
      'Mechanical parts',
      'Conceptual designs',
      'Parametric modeling',
      'Format conversion'
    ],
  },
  {
    id: 'revit-families',
    slug: 'revit-families',
    title: 'Revit Family Creation',
    shortDescription: 'Custom Revit families and component libraries',
    icon: '🔧',
    features: [
      'Custom parametric families',
      'Loadable and system families',
      'Nested families',
      'Shared parameters',
      'Family templates',
      'Quality control and testing'
    ],
  }
];

// Helper function to get service by slug
export function getServiceBySlug(slug) {
  return services.find(service => service.slug === slug);
}

// Helper function to get all service slugs
export function getAllServiceSlugs() {
  return services.map(service => service.slug);
}

// Helper function to get related services
export function getRelatedServices(currentSlug, limit = 3) {
  return services
    .filter(service => service.slug !== currentSlug)
    .slice(0, limit);
}
