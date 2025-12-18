"use client";

import { useEffect, useState } from "react";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("Architecture");
  const [isPaused, setIsPaused] = useState(false);

  const architectureProjects = [
    {
      id: 1,
      title: "Classical Farmhouse Villa, Indore",
      tags: ["REVIT", "LOD350"],
      desc: "A luxury classical-style farmhouse villa designed and documented end-to-end — including complete Revit modeling, interior design, construction drawings, 3D renderings, and a full walkthrough presentation.",
      image: "https://res.cloudinary.com/dx0nrghqt/image/upload/v1765387605/FARMHOUSE_BIM_MODEL_uuvlfs.jpg"
    },
    {
      id: 2,
      title: "Residential Community Development",
      tags: ["ARCHICAD", "MASTERPLAN"],
      desc: "A premium residential society featuring 35 villas. We handled complete Revit modeling of all villas, roads, and pathways, along with photorealistic renderings and an immersive walkthrough presentation.",
      image: "https://res.cloudinary.com/dx0nrghqt/image/upload/v1765387033/ARCHIOCAD_MODELLING_1_vt7t5o.png"
    },
    {
      id: 3,
      title: "Container-Based Retail Hub",
      tags: ["REVIT", "LOD300 BIM MODEL"],
      desc: "A modular retail and café hub designed entirely with shipping containers — featuring office spaces, retail zones, and a café. We delivered the full Revit model, renderings, and construction drawings.",
      image: "https://res.cloudinary.com/dx0nrghqt/image/upload/v1765387034/CONTAINER_MODELING_1_wzjrkh.png"
    },
    {
      id: 4,
      title: "Residential Permit Set",
      tags: ["REVIT DOCUMENTATION", "PERMIT SET"],
      desc: "A residential project in Canada where we developed the full permit documentation as per local building codes, along with interior design, Revit modeling, photorealistic renders, and a virtual walkthrough.",
      image: "https://res.cloudinary.com/dx0nrghqt/image/upload/v1765387034/RENDERING_oqp0z7.png"
    },
    {
      id: 5,
      title: "Commercial Mall Facade Development",
      tags: ["FACADE SHOP DRAWINGS", "FABRICATION DRAWINGS"],
      desc: "A large-scale commercial mall project focused on detailed facade design and visualization. Our team executed the full 3D modeling, rendering, and presentation to enhance the architectural identity.",
      image: "https://res.cloudinary.com/dx0nrghqt/image/upload/v1765387039/REVIT_MODELING_szbnja.jpg"
    },
    {
      id: 6,
      title: "Residential Building Permit",
      tags: ["PERMIT SET", "ARCHITECTURAL DESIGN"],
      desc: "A residential project refined from initial concept to detailed execution drawings — including design development, construction documentation, 3D visualization, and walkthroughs delivered with precision and clarity.",
      image: "https://res.cloudinary.com/dx0nrghqt/image/upload/v1765387034/DRAFTING_SET_jhtqzc.jpg"
    },
    {
      id: 7,
      title: "Architecture Design",
      tags: ["CONSTRUCTION DRAWINGS", "RENDERING"],
      desc: "A modern 4 BHK G+3 bungalow in Shujalpur designed with complete architectural, structural, GFC, façade, MEP, and interior solutions. Contemporary aesthetics, efficient planning, and fully coordinated construction drawings.",
      image: "https://res.cloudinary.com/dx0nrghqt/image/upload/v1765389514/BIM_MODEL_rfrqvk.png"
    },
    {
      id: 8,
      title: "Single Family House BIM Model",
      tags: ["REMODEL PROJECT", "3D VISUALISATION"],
      desc: "A single-family house modeled in 3D up to LOD 350, delivering accurate geometry and coordinated construction sheets. Completed with high-quality photorealistic renders.",
      image: "https://res.cloudinary.com/dx0nrghqt/image/upload/v1765387761/SINGLE_FAMILY_HOUSE_BIM_MODEL_yfwchi.jpg"
    },
    {
      id: 9,
      title: "Commercial Project",
      tags: ["FACADE DESIGN", "LOD300 MODEL"],
      desc: "A contemporary hotel project featuring a café at the ground floor, banquet hall, and guest rooms on the upper levels. Complete construction drawings with fully coordinated MEP layouts and LOD 350 interior detailing.",
      image: "https://res.cloudinary.com/dx0nrghqt/image/upload/v1765390352/ARCHITECTURE_DESIGN_a0j8z6.png"
    }
  ];

  const structuralProjects = [
    {
      id: 1,
      title: "Farmhouse Structure",
      tags: ["STRUCTURE DESIGN", "MODELING LOD 500", "RCC & STEEL"],
      desc: "A classical 3BHK farmhouse designed with timeless architectural character and a fully engineered structural system, including detailed rebar modeling. Delivered construction-ready drawings with precise structural detailing.",
      image: "https://res.cloudinary.com/dx0nrghqt/image/upload/v1765896331/CD_SET_P3LZVL.JPG"
    },
    {
      id: 2,
      title: "Community Hall",
      tags: ["REBAR DETAILING", "LOD 400 STRUCTURAL BIM"],
      desc: "Structural design and detailed construction documentation delivered with precise drawings, reinforcement details, and schedules to ensure safe, efficient execution. A cost-effective, code-compliant solution for a durable community building.",
      image: "https://res.cloudinary.com/dx0nrghqt/image/upload/v1765974557/DRAFTING_BXWVNN.PNG"
    },
    {
      id: 3,
      title: "Commercial Building",
      tags: ["STEEL STRUCTURE", "STRUCTURAL QUANTITY TAKEOFF"],
      desc: "Commercial steel-structure BIM modeling delivered with high accuracy, covering complete building modeling and coordinated steel framing in Revit. Execution-ready drawings and fabrication sheets for seamless construction.",
      image: "https://res.cloudinary.com/dx0nrghqt/image/upload/v1765896373/REBAR_DETAILING_TCV4SM.JPG"
    },
    {
      id: 4,
      title: "Advance Timber Framing House",
      tags: ["RESIDENTIAL", "OUTSOURCED STRUCTURAL BIM"],
      desc: "Complete BIM modeling and construction-ready sheet production for a timber structure, delivering accurate geometry, coordinated details, and execution-focused drawings to streamline approvals and on-site construction.",
      image: "https://res.cloudinary.com/dx0nrghqt/image/upload/v1765896373/WOODEN_STRUCTURE_MODELING_AKQ7FZ.PNG"
    },
    {
      id: 5,
      title: "Multi-Storey Institutional Building",
      tags: ["WOODEN STRUCTURE", "SHOP DRAWINGS"],
      desc: "A G+6 institutional truss-structure building in the Czech Republic, delivered with a precise Revit BIM model and coordinated drawing set for construction-ready execution, ensuring accuracy and global compliance.",
      image: "https://res.cloudinary.com/dx0nrghqt/image/upload/v1765896374/CIVIL_DRAWINGS_WJBXHJ.JPG"
    },
    {
      id: 6,
      title: "Neo-Classical Courtyard Block",
      tags: ["TRUSS DETAILING", "CLASH DETECTION"],
      desc: "A G+6 institutional truss-structure building in the Czech Republic, delivered with complete BIM modeling, detailed drawings, and construction-ready sheets, ensuring precision, coordination, and execution efficiency.",
      image: "https://res.cloudinary.com/dx0nrghqt/image/upload/v1765896374/CONCRETE_STRUCTURE_WG81YD.JPG"
    },
    {
      id: 7,
      title: "Gridline House",
      tags: ["FOUNDATION DETAILS", "GLOBAL STRUCTURAL BIM"],
      desc: "Double-storey wooden residence precisely modeled in BIM with execution-ready structural detailing, ensuring accuracy, constructability, and seamless coordination for residential developments.",
      image: "https://res.cloudinary.com/dx0nrghqt/image/upload/v1765896376/STEEL_STRUCTURE_MYUU82.PNG"
    },
    {
      id: 8,
      title: "Interlock Gable House",
      tags: ["CIVIL STRUCTURAL", "REVIT MODELING"],
      desc: "This G+1 residential house features a complete timber structure with a custom-designed wooden truss system, precisely modeled in BIM for construction accuracy with fabrication-ready wood detailing sheets.",
      image: "https://res.cloudinary.com/dx0nrghqt/image/upload/v1765896372/WOODEN_STRUCTURE_BUILDING_GGLF47.JPG"
    },
    {
      id: 9,
      title: "Timber Crest Row Residences",
      tags: ["ROW HOUSES", "LOD 300 STRUCTURAL"],
      desc: "Sloping-site row housing project featuring precisely coordinated structural BIM modeling, with identical units developed with consistent design logic and execution-ready drawings for scalable residential development.",
      image: "https://res.cloudinary.com/dx0nrghqt/image/upload/v1765896375/STRUCTURE_MODELLING_GZQTX2.PNG"
    }
  ];

  const mepProjects = [
    {
      id: 1,
      title: "HVAC Modeling",
      tags: ["REVIT MEP", "LOD350 MODEL", "HVAC"],
      desc: "A highly intricate project involving detailed BIM modeling and documentation of plumbing, HVAC, drainage, gas pipelines, and electrical systems — executed with precision and coordination across all MEP disciplines.",
      image: "https://res.cloudinary.com/dx0nrghqt/image/upload/v1765639254/HVAC_MODELLING_htm9dq.jpg"
    },
    {
      id: 2,
      title: "Oil Refinery As-Built Documentation",
      tags: ["SCAN TO BIM", "MEPF MODELING"],
      desc: "An oil refinery project where we developed a precise MEP model of existing on-site systems. The scope included complete BIM coordination and the creation of detailed construction documentation sheets.",
      image: "https://res.cloudinary.com/dx0nrghqt/image/upload/v1765639282/OIL_REFINERY_hvyqp6.jpg"
    },
    {
      id: 3,
      title: "Industrial Building MEP",
      tags: ["HVAC MODELING", "LOD350 MODELING"],
      desc: "An industrial facility focused entirely on MEP modeling — including HVAC, plumbing, drainage, and electrical systems — ensuring accuracy, integration, and documentation for execution readiness.",
      image: "https://res.cloudinary.com/dx0nrghqt/image/upload/v1765639255/INDUSTRIAL_BUILDING_MEP_lgtbgg.jpg"
    },
    {
      id: 4,
      title: "Commercial MEP Project",
      tags: ["PLUMBING DESIGN", "SHOP DRAWINGS"],
      desc: "A 5-storey commercial project where we delivered full MEP and architectural design, complete BIM modeling, and LOD 350 shop drawings. The coordinated model ensured accurate fabrication and clash-free installation.",
      image: "https://res.cloudinary.com/dx0nrghqt/image/upload/v1765639254/COMMERCIAL_MEP_gy9hqe.jpg"
    },
    {
      id: 5,
      title: "MEP As-Builts",
      tags: ["DUCTWORK", "SCAN TO BIM"],
      desc: "We delivered a ±5 mm accurate Scan to BIM model with LOD 350 MEP and HVAC, built directly from point-cloud data. The coordinated model supported existing condition drawings and enabled the client's new design development.",
      image: "https://res.cloudinary.com/dx0nrghqt/image/upload/v1765639285/MEP_AS-BUILTS_fzgmvk.jpg"
    },
    {
      id: 6,
      title: "Industrial Project",
      tags: ["INDUSTRIAL DESIGN", "MEPF MODELING"],
      desc: "Commercial project with complete architecture, electrical, and plumbing documentation and BIM modelling. Delivered a fully coordinated Revit model with detailed drawings and clash-free layouts.",
      image: "https://res.cloudinary.com/dx0nrghqt/image/upload/v1765639285/INDUSTRIAL_PROJECT_p2yrk1.jpg"
    },
    {
      id: 7,
      title: "Plumbing Project",
      tags: ["PLUMBING MODELING", "CLASH DETECTION"],
      desc: "This industrial project involved converting CAD drawings into a Revit LOD 350 model with complete plumbing integration. We also performed clash detection to ensure a fully coordinated, clash-free model.",
      image: "https://res.cloudinary.com/dx0nrghqt/image/upload/v1765639283/PLUMBING_cza6jh.jpg"
    },
    {
      id: 8,
      title: "Chiller Plant",
      tags: ["MEP SYSTEM MODELING", "LOD350 MODEL"],
      desc: "Detailed industrial 3D model in SketchUp featuring chillers, pumps, fittings, and complete supply-return pipeline layout with precise coordination for accurate visualization and planning.",
      image: "https://res.cloudinary.com/dx0nrghqt/image/upload/v1765639282/MEP_project_sketchup_w4zynj.jpg"
    },
    {
      id: 9,
      title: "Office MEP",
      tags: ["DUCTWORK", "PIPING"],
      desc: "We developed a full BIM package for a 12-storey office building, delivering coordinated ductwork, piping, and architectural modeling along with precise documentation. Each floor covered 10,000 sq.ft.",
      image: "https://res.cloudinary.com/dx0nrghqt/image/upload/v1765639284/OFFICE_MEP_yblhoq.jpg"
    }
  ];

  const draftingProjects = [
    {
      id: 1,
      title: "Farmhouse at Indore",
      tags: ["ARCHITECTURAL", "DRAWING DRAFTING", "INTERIOR DETAILING"],
      desc: "Farmhouse project delivered with end-to-end architectural and structural design, supported by precise BIM-driven planning. Comprehensive construction drawing sets were developed for seamless on-site construction.",
      image: "https://res.cloudinary.com/dx0nrghqt/image/upload/v1765974860/1_OWXKGW.JPG"
    },
    {
      id: 2,
      title: "Typical Details",
      tags: ["STRUCTURE DETAILS", "EXECUTION DRAWINGS"],
      desc: "Comprehensive architectural and interior detailing covering façade, structural, flooring, ceiling, and wall details, developed with high precision for construction-ready execution across multiple projects.",
      image: "https://res.cloudinary.com/dx0nrghqt/image/upload/v1765974862/CAD_WORK_-_COPY_PAGE-0011_B30OUF.JPG"
    },
    {
      id: 3,
      title: "Electrical Working Drawing",
      tags: ["POWER AND LIGHTING PLANS", "BIM MEP DRAWINGS"],
      desc: "Comprehensive electrical BIM documentation including power and lighting floor plans, lighting schedules, equipment layouts, and fully coordinated switch-socket connections with integrated LED layouts.",
      image: "https://res.cloudinary.com/dx0nrghqt/image/upload/v1765974860/ID-DWG-11253_PAGE-0001_SBPMUE.JPG"
    },
    {
      id: 4,
      title: "Permit Set",
      tags: ["BUILDING CODES", "ZONING DRAWINGS"],
      desc: "Comprehensive permit set documentation delivered for projects across Canada, Australia, USA, and India, fully compliant with local building codes ensuring smooth and fast permit approvals.",
      image: "https://res.cloudinary.com/dx0nrghqt/image/upload/v1765974864/501MED_-_66_ALMOND_ST_BALWYN_NORTH_01.07.21_10__PAGE-0003_XAKH1W.JPG"
    },
    {
      id: 5,
      title: "As-Built Drawings",
      tags: ["SCAN TO BIM", "POINT CLOUD"],
      desc: "As-built BIM documentation developed from laser scans and hand sketches, delivering highly accurate and verified building records with complete construction drawing sets for compliance-ready execution.",
      image: "https://res.cloudinary.com/dx0nrghqt/image/upload/v1765995967/QUANTITY_SCHEDULE_kjqwam.jpg"
    },
    {
      id: 6,
      title: "Facade Treatment",
      tags: ["FACADE DETAILS", "MATERIAL SCHEDULE"],
      desc: "High-quality facade shop drawings developed with precise construction details, facade joinery coordination, and comprehensive material schedules for fabrication-ready documentation.",
      image: "https://res.cloudinary.com/dx0nrghqt/image/upload/v1765974863/CAD_WORK_-_COPY_PAGE-0009_D2KTUS.JPG"
    },
    {
      id: 7,
      title: "Presentation Drawing Set",
      tags: ["ARCHITECTURAL DRAWINGS", "OFFSHORE DRAFTING"],
      desc: "Architectural presentation package showcasing detailed floor plans and comprehensive design drawings that clearly communicate the building concept with high-quality renders for client approvals.",
      image: "https://res.cloudinary.com/dx0nrghqt/image/upload/v1765974863/DMR_DESIGNS_-_KINGS_PARK_-_CDC_PLANS_ALTERATIONS_ADDITIONS_PAGE-0011_JAWZXG.JPG"
    },
    {
      id: 8,
      title: "Structural Drawings",
      tags: ["REBAR DETAILS", "BAR BENDING SCHEDULE"],
      desc: "Construction-ready structural drawings with precise rebar detailing, including accurate sizes, quantities, and placement for seamless execution on site with comprehensive schedules.",
      image: "https://res.cloudinary.com/dx0nrghqt/image/upload/v1765974860/2_NAW3TH.JPG"
    },
    {
      id: 9,
      title: "RCC & Timber Roof Coordination",
      tags: ["CONSTRUCTION DRAWINGS", "ZERO-REWORK BIM"],
      desc: "Highly detailed structural section drawings with accurate rebar layouts, dimensions, and construction levels, ensuring full compliance with construction-ready standards for efficient execution.",
      image: "https://res.cloudinary.com/dx0nrghqt/image/upload/v1765974861/3_OZDMBJ.JPG"
    }
  ];

  const interiorProjects = [
    {
      id: 1,
      title: "Interior Documentation",
      tags: ["SHOP DRAWINGS", "RENDERING"],
      desc: "We developed a highly detailed and precise 3D interior model based on the provided design — ensuring every material, element, and proportion aligned seamlessly with execution-level accuracy.",
      image: "https://res.cloudinary.com/dx0nrghqt/image/upload/v1765545456/INTERIOR_DOCUMENTATION_i2dud5.png"
    },
    {
      id: 2,
      title: "Interior Elevations",
      tags: ["ASSEMBLIES", "JOINERY"],
      desc: "Comprehensive interior documentation including furniture layouts, reflected ceiling plans, general arrangement (GA) plans, and power layouts — all drafted with precision for on-site implementation.",
      image: "https://res.cloudinary.com/dx0nrghqt/image/upload/v1765545511/Interior_elevations_xjejae.jpg"
    },
    {
      id: 3,
      title: "CAD Drafting",
      tags: ["JOINERY DETAILS", "SHOP DRAWINGS"],
      desc: "Produced detailed joinery and millwork sheets specifying dimensions, materials, and fixing methods — enabling accurate fabrication and installation documentation.",
      image: "https://res.cloudinary.com/dx0nrghqt/image/upload/v1765545896/CAD_DRAFTING_bysaij.jpg"
    },
    {
      id: 4,
      title: "Joinery and Details",
      tags: ["VISUALIZATION", "3D MODELING"],
      desc: "Created detailed wall finish drawings with assigned textures and materials, followed by sectional documentation highlighting dimensions, layers, and finish specifications.",
      image: "https://res.cloudinary.com/dx0nrghqt/image/upload/v1765545908/JOINERY_AND_DETAILS_cz3qox.png"
    },
    {
      id: 5,
      title: "Interior Design",
      tags: ["FLOOR PLAN", "DETAILING"],
      desc: "Developed typical interior detail sheets illustrating ceiling layouts, millwork junctions, and construction joints — ensuring technical accuracy and design consistency across all interior elements.",
      image: "https://res.cloudinary.com/dx0nrghqt/image/upload/v1765545936/INTERIOR_DESIGN_sbdowl.jpg"
    },
    {
      id: 6,
      title: "Bedroom Interior",
      tags: ["FURNITURE", "LIGHTING"],
      desc: "A complete interior design project delivered with high-quality renders and fully detailed LOD 300 sheets. The design combines refined aesthetics with precise technical documentation.",
      image: "https://res.cloudinary.com/dx0nrghqt/image/upload/v1765545943/BEDROOM_INTERIOR_jgcndd.png"
    },
    {
      id: 7,
      title: "Joinery",
      tags: ["KITCHEN", "LOD 350"],
      desc: "We delivered a comprehensive documentation package featuring detailed shop drawings for the kitchen and showcase units, complete with precise joinery detailing and material specifications.",
      image: "https://res.cloudinary.com/dx0nrghqt/image/upload/v1765545953/JOINERY_owec9h.jpg"
    },
    {
      id: 8,
      title: "Shop Drawing",
      tags: ["ASSEMBLIES", "TYPICAL DETAILS"],
      desc: "Complete interior documentation package featuring a comprehensive Typical Detail Sheet covering ceiling details, flooring specifications, and joinery details for execution-ready drawings.",
      image: "https://res.cloudinary.com/dx0nrghqt/image/upload/v1765545969/SHOP_DRAWING_wfesbw.jpg"
    },
    {
      id: 9,
      title: "Millwork",
      tags: ["RENDERS", "AUTOCAD"],
      desc: "We delivered a high-precision LOD 350 3D model complete with detailed sheets, ensuring accuracy and clarity for design and coordination. The project also included photorealistic renders.",
      image: "https://res.cloudinary.com/dx0nrghqt/image/upload/v1765546032/MILLWORK_rmppph.jpg"
    }
  ];

  const scanToBimProjects = [
    {
      id: 1,
      title: "Institutional Building",
      tags: ["SCAN TO BIM", "AS-BUILT MODEL", "AUTODESK REVIT"],
      desc: "A four-storey institutional building located in Prague, where we delivered Scan to BIM and detailed documentation, creating an accurate as-built model for planning and coordination.",
      image: "https://res.cloudinary.com/dx0nrghqt/image/upload/v1765988214/INSTITUTIONAL_BUILDING_b2kvvo.jpg"
    },
    {
      id: 2,
      title: "Hospitality Project",
      tags: ["POINT CLOUD TO BIM", "LOD 350 MODEL", "MEPF MODELING"],
      desc: "A 20,000 sq.ft institutional building located in the Czech Republic, where we delivered Scan to BIM with coordinated architecture, structure, and MEP models to produce an accurate as-built BIM dataset.",
      image: "https://res.cloudinary.com/dx0nrghqt/image/upload/v1765988214/HOSPITALITY_PROJECT_y87ssv.jpg"
    },
    {
      id: 3,
      title: "Data Centre Scan to BIM",
      tags: ["DATA CENTRE HVAC", "LOD 500 BIM"],
      desc: "This 35,000+ sq.ft data centre Scan to BIM project delivered a precise as-built Revit model covering architectural, structural, and MEPF systems with detailed tagging for facility management.",
      image: "https://res.cloudinary.com/dx0nrghqt/image/upload/v1765988215/DATA_CENTRE_SCAN_TO_BIM_v650tq.jpg"
    },
    {
      id: 4,
      title: "Residential Colony",
      tags: ["AS-BUILT DOCUMENTATION", "LOD 300 BIM MODEL"],
      desc: "This residential colony project in the Czech Republic comprises six buildings delivered using high-accuracy Scan to BIM, with precise Revit models and construction-ready documentation.",
      image: "https://res.cloudinary.com/dx0nrghqt/image/upload/v1765988214/RESIDENTIAL_COLONY_cwxpcx.jpg"
    },
    {
      id: 5,
      title: "University Project",
      tags: ["CAMPUS BIM MODELING", "CLASH DETECTION"],
      desc: "This university campus project features three five-story academic buildings and an 80,000+ sq.ft football ground, delivered with LOD 350 architectural, site, and MEP BIM modeling.",
      image: "https://res.cloudinary.com/dx0nrghqt/image/upload/v1765988215/UNIVERSITY_PROJECT_myx5jr.jpg"
    },
    {
      id: 6,
      title: "Hotel Vltana",
      tags: ["HOTEL BIM PROJECT", "MEPF MODELING"],
      desc: "Hotel Vltana is a 4-storey, 40,000 sq.ft hospitality project in Prague delivered with a fully coordinated, clash-free LOD 350 BIM model covering architecture, structure, and MEPF.",
      image: "https://res.cloudinary.com/dx0nrghqt/image/upload/v1765988215/HOTEL_VLTANA_adoxd4.jpg"
    },
    {
      id: 7,
      title: "Industrial Silos",
      tags: ["INDUSTRIAL BIM MODELING", "LOD 350 MODEL"],
      desc: "This industrial silo BIM project utilized Scan-to-BIM to create a high-precision LOD 350 Revit model for a 25,000 sq.ft facility, integrating complex MEPF systems with accurate point cloud alignment.",
      image: "https://res.cloudinary.com/dx0nrghqt/image/upload/v1765988214/INDUSTRIAL_SILOS_ghp8fo.png"
    },
    {
      id: 8,
      title: "Apartment Project",
      tags: ["LARGE SCALE BIM", "INTERNATIONAL BIM"],
      desc: "Four-storey residential apartment building over 100,000 sq.ft delivered using fully coordinated architectural, structural, and MEPF BIM models with clash-free workflows.",
      image: "https://res.cloudinary.com/dx0nrghqt/image/upload/v1765988214/APARTMENT_PROJECT_c6iifj.png"
    },
    {
      id: 9,
      title: "School Project",
      tags: ["BIM COORDINATION", "END-TO-END BIM"],
      desc: "End-to-end architectural, structural, and MEPF BIM modeling for a 4-storey, 65,000 sq.ft educational building with basketball court, delivered as a fully coordinated, construction-ready BIM model.",
      image: "https://res.cloudinary.com/dx0nrghqt/image/upload/v1765988214/SCHOOL_PROJECT_lduvtu.jpg"
    }
  ];

  const visualizationProjects = [
    {
      id: 1,
      title: "Farmhouse",
      tags: ["350 LOD", "HOUSE", "RENDERING"],
      desc: "A modern farmhouse designed in Indore where we delivered complete architectural planning, detailed Good-for-Construction (GFC) drawings, and high-quality 3D renders.",
      image: "https://res.cloudinary.com/dx0nrghqt/image/upload/v1765402584/ISOMETRIC_VIEW_1_r8klju.jpg"
    },
    {
      id: 2,
      title: "Luxury House",
      tags: ["SHOP DRAWING", "RENDERING"],
      desc: "This project involved complete 3D modeling, photorealistic renderings, and interior design, all developed with LOD 300 accuracy. We delivered fully detailed sheets and coordinated visuals.",
      image: "https://res.cloudinary.com/dx0nrghqt/image/upload/v1765402211/FACADE_RENDER_bcprw7.jpg"
    },
    {
      id: 3,
      title: "Classical Villa",
      tags: ["FACADE DESIGN", "WALKTHROUGH"],
      desc: "A Classical Villa designed with an elegant façade featuring timeless proportions, intricate detailing, and a luxurious architectural character. Complete façade design and photorealistic renderings.",
      image: "https://res.cloudinary.com/dx0nrghqt/image/upload/v1765402207/BIM_ARCHITECTURE_gb592h.jpg"
    },
    {
      id: 4,
      title: "Modern House",
      tags: ["BUILDING CODES", "DRAFTING", "RENDERING"],
      desc: "This project involved transforming a basic PDF into a fully detailed Revit model with complete sheet documentation, ensuring accuracy and permit-ready clarity.",
      image: "https://res.cloudinary.com/dx0nrghqt/image/upload/v1765401286/PERMIT_SET_invdft.jpg"
    },
    {
      id: 5,
      title: "Single Family House",
      tags: ["3D MODELING", "LUMION"],
      desc: "This project transformed a simple PDF into a fully detailed 3D BIM model complete with coordinated sheets and documentation. We delivered high-quality photorealistic renders.",
      image: "https://res.cloudinary.com/dx0nrghqt/image/upload/v1765401286/SINGLE_FAMILY_HOUSE_spk0qv.jpg"
    },
    {
      id: 6,
      title: "Luxury Farmhouse",
      tags: ["INTERIOR", "3D MODEL"],
      desc: "A unique, concept-driven residential project where we developed photorealistic renderings from the provided design — highlighting its abstract geometry and modern architectural expression.",
      image: "https://res.cloudinary.com/dx0nrghqt/image/upload/v1765402597/RENDERING_1_f8zgmt.jpg"
    },
    {
      id: 7,
      title: "Bungalow",
      tags: ["LUMION", "RENDERING"],
      desc: "A complete interior modeling and visualization project — including detailed Revit modeling, drawing sheets, and final Lumion renderings enhanced through post-production.",
      image: "https://res.cloudinary.com/dx0nrghqt/image/upload/v1765401292/CONSTRUCTION_DRAWING_SET_vjiyr7.jpg"
    },
    {
      id: 8,
      title: "High End Villa",
      tags: ["EXTERIOR", "FACADE DESIGN"],
      desc: "Renderings produced from a provided 3D model, enhanced with detailed lighting, textures, and post-production effects to achieve high-end visualization quality.",
      image: "https://res.cloudinary.com/dx0nrghqt/image/upload/v1765401288/SCAN_TO_BIM_uodarl.png"
    },
    {
      id: 9,
      title: "Container Food Court",
      tags: ["CONTAINER", "CD SET"],
      desc: "Container-based exterior and interior renderings developed in three unique design options. Highly realistic materials, lighting, and textures were used to capture a refined aesthetic.",
      image: "https://res.cloudinary.com/dx0nrghqt/image/upload/v1765401286/REVIT_MODELLING_qozltr.png"
    }
  ];

  const modelingProjects = [
    {
      id: 1,
      title: "Residential 3D Model",
      tags: ["REVIT", "LOD 350", "3D MODELING"],
      desc: "Complete 3D BIM modeling of a residential building with accurate geometry, coordinated systems, and detailed documentation for construction and visualization purposes.",
      image: "https://res.cloudinary.com/dx0nrghqt/image/upload/v1765387605/FARMHOUSE_BIM_MODEL_uuvlfs.jpg"
    },
    {
      id: 2,
      title: "Commercial Complex Model",
      tags: ["ARCHICAD", "COORDINATION", "BIM"],
      desc: "Large-scale commercial building modeled with full coordination across architectural, structural, and MEP disciplines for clash-free construction documentation.",
      image: "https://res.cloudinary.com/dx0nrghqt/image/upload/v1765390352/ARCHITECTURE_DESIGN_a0j8z6.png"
    },
    {
      id: 3,
      title: "Industrial Facility Model",
      tags: ["SKETCHUP", "3D VISUALIZATION"],
      desc: "Detailed 3D model of an industrial facility including equipment, piping systems, and structural elements for planning and coordination purposes.",
      image: "https://res.cloudinary.com/dx0nrghqt/image/upload/v1765639282/MEP_project_sketchup_w4zynj.jpg"
    },
    {
      id: 4,
      title: "Villa 3D Model",
      tags: ["REVIT MODELING", "RENDERING"],
      desc: "High-quality 3D model of a luxury villa with interior detailing, material assignments, and photorealistic rendering capabilities for client presentations.",
      image: "https://res.cloudinary.com/dx0nrghqt/image/upload/v1765402207/BIM_ARCHITECTURE_gb592h.jpg"
    },
    {
      id: 5,
      title: "Office Building Model",
      tags: ["LOD 400", "COORDINATION"],
      desc: "Multi-storey office building modeled to LOD 400 standards with detailed floor plans, sections, and coordinated MEP systems for construction documentation.",
      image: "https://res.cloudinary.com/dx0nrghqt/image/upload/v1765639284/OFFICE_MEP_yblhoq.jpg"
    },
    {
      id: 6,
      title: "Retail Space Model",
      tags: ["INTERIOR", "3D MODEL"],
      desc: "Complete 3D modeling of retail interiors including fixtures, furniture, and finishes for design visualization and construction coordination.",
      image: "https://res.cloudinary.com/dx0nrghqt/image/upload/v1765545456/INTERIOR_DOCUMENTATION_i2dud5.png"
    },
    {
      id: 7,
      title: "Educational Building Model",
      tags: ["BIM MODELING", "DOCUMENTATION"],
      desc: "Comprehensive 3D BIM model of an educational facility with detailed classrooms, corridors, and common areas for construction and facility management.",
      image: "https://res.cloudinary.com/dx0nrghqt/image/upload/v1765988214/SCHOOL_PROJECT_lduvtu.jpg"
    },
    {
      id: 8,
      title: "Healthcare Facility Model",
      tags: ["REVIT", "MEP COORDINATION"],
      desc: "Specialized 3D modeling for healthcare facility including patient rooms, operating theaters, and complex MEP systems for construction coordination.",
      image: "https://res.cloudinary.com/dx0nrghqt/image/upload/v1765639254/COMMERCIAL_MEP_gy9hqe.jpg"
    },
    {
      id: 9,
      title: "Mixed-Use Development Model",
      tags: ["LARGE SCALE", "BIM"],
      desc: "Large-scale mixed-use development 3D model integrating residential, commercial, and parking elements with full coordination across all disciplines.",
      image: "https://res.cloudinary.com/dx0nrghqt/image/upload/v1765387034/CONTAINER_MODELING_1_wzjrkh.png"
    }
  ];

  const revitFamilyProjects = [
    {
      id: 1,
      title: "Custom Modular Sofa Revit Family",
      tags: ["REVIT FAMILIES", "PARAMETRIC FURNITURE"],
      desc: "Custom Revit furniture families developed with parametric and non-parametric controls, including accurate 3D modeling, plan, and elevation detailing optimized for BIM performance.",
      image: "https://res.cloudinary.com/dx0nrghqt/image/upload/v1765993954/REVIT_MODEL_j0fm9k.png"
    },
    {
      id: 2,
      title: "Pressure Reducing Valve Revit Family",
      tags: ["REVIT MEP FAMILIES", "MECHANICAL BIM"],
      desc: "Highly detailed mechanical Revit family of a pressure reducing valve, developed with parametric and non-parametric controls for accurate BIM representation and MEP coordination.",
      image: "https://res.cloudinary.com/dx0nrghqt/image/upload/v1765993949/ARCHITECTURAL_DESIGN_cqcat6.jpg"
    },
    {
      id: 3,
      title: "Water Treatment Tank Revit Family",
      tags: ["WATER TREATMENT BIM", "PARAMETRIC BIM"],
      desc: "Detailed mechanical Revit families for water treatment tanks with connected piping, developed using parametric controls for accurate BIM coordination and clash detection.",
      image: "https://res.cloudinary.com/dx0nrghqt/image/upload/v1765993949/INTERIOR_DRAFTING_v4ope0.jpg"
    },
    {
      id: 4,
      title: "Modular Kitchen Revit Family Set",
      tags: ["REVIT KITCHEN FAMILIES", "INTERIOR BIM"],
      desc: "Detailed Revit kitchen families including cabinets, appliances, and fixtures, developed using parametric and non-parametric controls for interior coordination and documentation.",
      image: "https://res.cloudinary.com/dx0nrghqt/image/upload/v1765993948/FURNITURE_FAMILIES_kfagbp.jpg"
    },
    {
      id: 5,
      title: "Booster Pump Skid Revit Family",
      tags: ["REVIT MEP FAMILIES", "BOOSTER PUMP BIM"],
      desc: "Detailed Revit MEP families for a booster pump skid system, modeled with parametric and non-parametric components for accurate BIM coordination and construction documentation.",
      image: "https://res.cloudinary.com/dx0nrghqt/image/upload/v1765993947/MEP_REVIT_FAMILIES_gjcid1.png"
    },
    {
      id: 6,
      title: "L-Shaped Sofa Revit Family",
      tags: ["REVIT FURNITURE", "PARAMETRIC BIM"],
      desc: "Custom L-shaped sofa developed as a Revit furniture family using parametric and non-parametric controls for accurate BIM representation and interior design workflows.",
      image: "https://res.cloudinary.com/dx0nrghqt/image/upload/v1765993949/LANDSCAPE_DESIGN_nvecac.png"
    },
    {
      id: 7,
      title: "Double Outdoor Umbrella Revit Family",
      tags: ["OUTDOOR BIM MODELING", "CUSTOM BIM CONTENT"],
      desc: "Custom outdoor shade Revit families modeled with parametric and non-parametric controls, ensuring accurate geometry and realistic visual representation for landscape workflows.",
      image: "https://res.cloudinary.com/dx0nrghqt/image/upload/v1765993948/JOINERIES_m8duyx.png"
    },
    {
      id: 8,
      title: "Modular Bunk Bed Revit Family",
      tags: ["REVIT FURNITURE", "INTERIOR BIM"],
      desc: "Space-efficient modular bunk bed developed as a Revit furniture family using parametric controls for residential and hospitality interiors with clash-free placement.",
      image: "https://res.cloudinary.com/dx0nrghqt/image/upload/v1765993948/FURNITURE_FAMILIES_kfagbp.jpg"
    },
    {
      id: 9,
      title: "Retail POS Counter Revit Family",
      tags: ["RETAIL BIM MODELING", "CUSTOM REVIT"],
      desc: "Detailed retail POS counter developed as a Revit family using parametric and non-parametric controls for commercial interiors, layout planning, and documentation-ready workflows.",
      image: "https://res.cloudinary.com/dx0nrghqt/image/upload/v1765993950/REVIT_FAMILIES_cxahap.jpg"
    }
  ];

  const getActiveProjects = () => {
    switch (activeCategory) {
      case "Architecture":
        return architectureProjects;
      case "Structural":
        return structuralProjects;
      case "MEP":
        return mepProjects;
      case "Drafting":
        return draftingProjects;
      case "Interior":
        return interiorProjects;
      case "ScanToBim":
        return scanToBimProjects;
      case "Visualization":
        return visualizationProjects;
      case "Modeling":
        return modelingProjects;
      case "RevitFamily":
        return revitFamilyProjects;
      default:
        return architectureProjects;
    }
  };

  const activeProjects = getActiveProjects();
  const row1 = activeProjects.slice(0, 3);
  const row2 = activeProjects.slice(3, 6);
  const row3 = activeProjects.slice(6, 9);

  const renderProjectCard = (project) => (
    <div className="project-card-premium" key={project.id}>
      <div className="project-card-image">
        <img src={project.image} alt={project.title} />
      </div>
      <div className="project-card-overlay">
        <div className="project-card-content">
          <div className="project-card-tags">
            {project.tags.map((tag, index) => (
              <span className="project-card-label" key={index}>{tag}</span>
            ))}
          </div>
          <h3 className="project-card-title">{project.title}</h3>
          <p className="project-card-desc">{project.desc}</p>
        </div>
      </div>
    </div>
  );

  return (
    <section id="projects" className="projects">
      <div className="projects-hero-header">
        <div className="projects-centered-container">
          <div className="projects-tag-center">PROJECTS</div>
          <h2 className="projects-main-title">OUR WORK</h2>
          <p className="projects-main-description">
            At Zenith Visions, we combine precision, innovation, and experience
            to deliver accurate and dependable BIM solutions. Our focus is on
            building trust-driven partnerships through quality work and on-time
            delivery.
          </p>
        </div>
      </div>

      <div className="projects-content-wrapper">
        <div className="projects-categories-horizontal">
          <button
            className={`project-category-tab ${activeCategory === "Architecture" ? "active" : ""}`}
            onClick={() => setActiveCategory("Architecture")}
          >
            Architecture BIM
          </button>
          <button
            className={`project-category-tab ${activeCategory === "Structural" ? "active" : ""}`}
            onClick={() => setActiveCategory("Structural")}
          >
            Structural BIM
          </button>
          <button
            className={`project-category-tab ${activeCategory === "MEP" ? "active" : ""}`}
            onClick={() => setActiveCategory("MEP")}
          >
            MEP BIM
          </button>
          <button
            className={`project-category-tab ${activeCategory === "Drafting" ? "active" : ""}`}
            onClick={() => setActiveCategory("Drafting")}
          >
            Drafting Services
          </button>
          <button
            className={`project-category-tab ${activeCategory === "Interior" ? "active" : ""}`}
            onClick={() => setActiveCategory("Interior")}
          >
            Interior Documentation
          </button>
          <button
            className={`project-category-tab ${activeCategory === "ScanToBim" ? "active" : ""}`}
            onClick={() => setActiveCategory("ScanToBim")}
          >
            Scan to BIM
          </button>
          <button
            className={`project-category-tab ${activeCategory === "Visualization" ? "active" : ""}`}
            onClick={() => setActiveCategory("Visualization")}
          >
            3D Visualization
          </button>
          <button
            className={`project-category-tab ${activeCategory === "Modeling" ? "active" : ""}`}
            onClick={() => setActiveCategory("Modeling")}
          >
            3D Modeling
          </button>
          <button
            className={`project-category-tab ${activeCategory === "RevitFamily" ? "active" : ""}`}
            onClick={() => setActiveCategory("RevitFamily")}
          >
            Revit Families
          </button>
        </div>

        <div className="projects-slider-container">
          <button 
            className={`projects-pause-btn ${isPaused ? "paused" : ""}`}
            onClick={() => setIsPaused(!isPaused)}
          >
            {isPaused ? "▶" : "⏸"}
          </button>
          <div className="projects-slider-wrapper">
            <div className={`projects-grid ${isPaused ? "paused" : ""}`} key={activeCategory}>
              {/* Row 1 - Slides Right */}
              <div className={`projects-row projects-row-1 slide-right ${isPaused ? "paused" : ""}`}>
                {row1.map(renderProjectCard)}
                {row1.map((project) => renderProjectCard({...project, id: project.id + 100}))}
                {row1.map((project) => renderProjectCard({...project, id: project.id + 200}))}
              </div>

              {/* Row 2 - Slides Left */}
              <div className={`projects-row projects-row-2 slide-left ${isPaused ? "paused" : ""}`}>
                {row2.map(renderProjectCard)}
                {row2.map((project) => renderProjectCard({...project, id: project.id + 100}))}
                {row2.map((project) => renderProjectCard({...project, id: project.id + 200}))}
              </div>

              {/* Row 3 - Slides Right */}
              <div className={`projects-row projects-row-3 slide-right ${isPaused ? "paused" : ""}`}>
                {row3.map(renderProjectCard)}
                {row3.map((project) => renderProjectCard({...project, id: project.id + 100}))}
                {row3.map((project) => renderProjectCard({...project, id: project.id + 200}))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
