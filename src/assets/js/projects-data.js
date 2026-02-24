/**
 * projects-data.js
 * Fuente única de datos para Projects landing y páginas individuales.
 * 6 proyectos con slug, hero, gallery, overview (2 bloques), related derivado.
 */
(function () {
  "use strict";

  var IMG = "https://lh3.googleusercontent.com/aida-public/";

  /** Proyectos: títulos exactos, slugs para URL, hero, gallery, excerpt, description (2 bloques) */
  window.projectsData = [
    {
      id: "boone-es",
      slug: "boone-es-emergency-repairs",
      title: "Boone ES Emergency Repairs",
      category: "Randall Recreation Center Project",
      categoryLabel: "Educational Facilities",
      heroImage: IMG + "AB6AXuAiyGks4jyMLMwQ4wLCg4gl3XV06YIhes4x0BUYEXthHNtgMw2fBqZJgT0-BqEVFxAIDx6HYz4FuVTZIyDjPjMxauMVhEM6H1_NWMKxIxUYCINMhuDCagKB4yNnAlfnKEeR1knKXAQOBMfav_RIcLG0J3FD8UAH1nVL9kl0YMJ_04qZ7lnLfqTODSXJ7x3DHr5iAWP0aOIwETxQRqiPsET9jO6LdOUI1nEz8CbN8T2NRL_oDDPYaVCz6g1UBamiHYg3oxjUiphgbPy3",
      image: IMG + "AB6AXuAiyGks4jyMLMwQ4wLCg4gl3XV06YIhes4x0BUYEXthHNtgMw2fBqZJgT0-BqEVFxAIDx6HYz4FuVTZIyDjPjMxauMVhEM6H1_NWMKxIxUYCINMhuDCagKB4yNnAlfnKEeR1knKXAQOBMfav_RIcLG0J3FD8UAH1nVL9kl0YMJ_04qZ7lnLfqTODSXJ7x3DHr5iAWP0aOIwETxQRqiPsET9jO6LdOUI1nEz8CbN8T2NRL_oDDPYaVCz6g1UBamiHYg3oxjUiphgbPy3",
      galleryImages: [
        IMG + "AB6AXuAiyGks4jyMLMwQ4wLCg4gl3XV06YIhes4x0BUYEXthHNtgMw2fBqZJgT0-BqEVFxAIDx6HYz4FuVTZIyDjPjMxauMVhEM6H1_NWMKxIxUYCINMhuDCagKB4yNnAlfnKEeR1knKXAQOBMfav_RIcLG0J3FD8UAH1nVL9kl0YMJ_04qZ7lnLfqTODSXJ7x3DHr5iAWP0aOIwETxQRqiPsET9jO6LdOUI1nEz8CbN8T2NRL_oDDPYaVCz6g1UBamiHYg3oxjUiphgbPy3",
        IMG + "AB6AXuBxD6bpHRp1-5Z_0rLDrrDMJnm7XdoncyHhlevv5od5R0GvJLyuwIGsRCepMMwbG6YqM97j_87lfRg7kJg0-DxWcnE3lwcz78tWxc_4FEsMo15UvSmsYMIxnaKT0JkvDXZBCo3aVIOgEHB6gexOnikQvzQdKQV1Yd_hO2U9MnXXy0nFhl1StivDu5RGXcNKZTOFoQlK101_hJG8_zyKC52tWNtvMSviLBe6VyjpfwkY2GJPBEUSGObBh6UweqP89ZIWDTO91wzVu0gz",
        IMG + "AB6AXuDvWOmeQ6Bf3RjXw7ObL4sEI8YMa8w6xV9nSzJksyZoOhCwZw2i-X7_AoISzmQOtD_2Wea9TpmldlcBisj4iZuqu_kc01t1mthTLTDHeYPKVRGagHE9kf0fz3CUVg-5QwInq5ItE3Rz7x9cq6wwHwGVXFUdJgZTtIY_FS1za2SyOV-jifU5wfcxJgRQIZNmUTZkTWx99GP4CLn0T1z_z5pKxOLb5gXtjyugqANg8ubrEi3VsSQKMj0Ovi3zI2ke8aXWagrTRCvQAprO"
      ],
      excerpt: "Emergency repairs and modernization at Boone Elementary School to ensure safe and compliant facilities.",
      description1: "SPD Contracting, Inc. delivered emergency repairs and facility modernization at Boone Elementary School, addressing critical infrastructure needs while minimizing disruption to the school community. The scope included structural assessments, HVAC and mechanical upgrades, and life-safety improvements in line with current codes.",
      description2: "Work was phased to allow continued occupancy where safe, with close coordination between the design team, district facilities, and our construction team. All deliverables were completed on schedule and within budget, restoring full compliance and improving long-term reliability of building systems."
    },
    {
      id: "wall-o-street",
      slug: "the-wall-at-o-street-se",
      title: "The Wall at O Street SE",
      category: "Government-Owned Buildings",
      categoryLabel: "Government-Owned Buildings",
      heroImage: IMG + "AB6AXuAKftn1FM49MrhtgBmDwmIOdNhWVGqoEpne48N-dmpk9mqgz-0aBbgVV0yAjhvDq1ystaPPqbk23-REg5REcZZ4-tfBMgXMKC5r3MkNiIelg81ksjPFt-byyTrO-46nX2rWMqyeHQ5qt-yB18Ww09RTgwe-D3XvQp71KbudhFclejx0R7q5KiqYk4ydiwkDbKFi1sGz4adUTXVMIfzUnXk4FfXSyt59DZtG0UZ45lghfUcJf2KLptaI1TX3OfCKqvvMQtNEKhDSZyh9",
      image: IMG + "AB6AXuAKftn1FM49MrhtgBmDwmIOdNhWVGqoEpne48N-dmpk9mqgz-0aBbgVV0yAjhvDq1ystaPPqbk23-REg5REcZZ4-tfBMgXMKC5r3MkNiIelg81ksjPFt-byyTrO-46nX2rWMqyeHQ5qt-yB18Ww09RTgwe-D3XvQp71KbudhFclejx0R7q5KiqYk4ydiwkDbKFi1sGz4adUTXVMIfzUnXk4FfXSyt59DZtG0UZ45lghfUcJf2KLptaI1TX3OfCKqvvMQtNEKhDSZyh9",
      galleryImages: [
        IMG + "AB6AXuAKftn1FM49MrhtgBmDwmIOdNhWVGqoEpne48N-dmpk9mqgz-0aBbgVV0yAjhvDq1ystaPPqbk23-REg5REcZZ4-tfBMgXMKC5r3MkNiIelg81ksjPFt-byyTrO-46nX2rWMqyeHQ5qt-yB18Ww09RTgwe-D3XvQp71KbudhFclejx0R7q5KiqYk4ydiwkDbKFi1sGz4adUTXVMIfzUnXk4FfXSyt59DZtG0UZ45lghfUcJf2KLptaI1TX3OfCKqvvMQtNEKhDSZyh9",
        IMG + "AB6AXuDx0nXc20MaAvkmgFWQ7tsuxf7FISaQhwRbt3xukoF2vLCPJD7_WiIJ3IQVbGdvVhGFa_t7pnRVrZ4sIcVJR-5Z_ACUvzof6Y2SLNl4mYqyfWvlYlIG9FyFVU3zxJ9MNw2youmRVi9StFpEt51Suvx2y1roGY1A8Hj0Pm3hcKq_ZFJcAkslrFLNP4WkPEoH5BmDXY_W88c-pB4Qj3f2-_uXLLCPKx_Jt9AMeLwsmqY4OFUSh7SzljvFzGHzgyS0EuFZkoN60as07RFC"
      ],
      excerpt: "Design-Build Services for the O Street SE Retaining Wall Restoration: structural rehabilitation and stabilization of the existing retaining wall to ensure long-term integrity and compliance with DGS standards.",
      description1: "The Design-Build Services for the O Street SE Retaining Wall Restoration project involved the structural rehabilitation and stabilization of the existing retaining wall to ensure long-term integrity and compliance with DGS standards. SPD Contracting, Inc. managed design coordination, permitting, and construction.",
      description2: "Coordination with utility providers was required to address potential conflicts, and all work adhered to local regulatory requirements and permitting processes. The approach focused on cost efficiency, sustainability, and minimal disruption to the surrounding area."
    },
    {
      id: "mpd",
      slug: "mpd-4th-district-hq",
      title: "MPD 4th District HQ",
      category: "Municipal & Healthcare",
      categoryLabel: "Municipal & Healthcare",
      heroImage: IMG + "AB6AXuACAkUo9Wgyl_p_SOjZ6MFvAgKrFfuvxaUh0FlhkmgOcUtxMmz3wH8FhbawpjZ1ETKbDljAKxNA5xhtEBCC27H2OLPqeVsRwR8IvTmojPodqWDzrvHfiCSG05n1ZtIPg2Xst6m3cLLoXApPpbUzN2vNzRbku1w-wtcZvE9SmiIgeyoSiOBN6RcmfSbdsFFaj-msC67wKHaDQz2wyBAhZNmm44zSjW1QvoiCHKGGlGwGLnq5MOWEY8tJGYeG_vcMy5rH_xV5g4fjy9cn",
      image: IMG + "AB6AXuACAkUo9Wgyl_p_SOjZ6MFvAgKrFfuvxaUh0FlhkmgOcUtxMmz3wH8FhbawpjZ1ETKbDljAKxNA5xhtEBCC27H2OLPqeVsRwR8IvTmojPodqWDzrvHfiCSG05n1ZtIPg2Xst6m3cLLoXApPpbUzN2vNzRbku1w-wtcZvE9SmiIgeyoSiOBN6RcmfSbdsFFaj-msC67wKHaDQz2wyBAhZNmm44zSjW1QvoiCHKGGlGwGLnq5MOWEY8tJGYeG_vcMy5rH_xV5g4fjy9cn",
      galleryImages: [
        IMG + "AB6AXuACAkUo9Wgyl_p_SOjZ6MFvAgKrFfuvxaUh0FlhkmgOcUtxMmz3wH8FhbawpjZ1ETKbDljAKxNA5xhtEBCC27H2OLPqeVsRwR8IvTmojPodqWDzrvHfiCSG05n1ZtIPg2Xst6m3cLLoXApPpbUzN2vNzRbku1w-wtcZvE9SmiIgeyoSiOBN6RcmfSbdsFFaj-msC67wKHaDQz2wyBAhZNmm44zSjW1QvoiCHKGGlGwGLnq5MOWEY8tJGYeG_vcMy5rH_xV5g4fjy9cn",
        IMG + "AB6AXuBxD6bpHRp1-5Z_0rLDrrDMJnm7XdoncyHhlevv5od5R0GvJLyuwIGsRCepMMwbG6YqM97j_87lfRg7kJg0-DxWcnE3lwcz78tWxc_4FEsMo15UvSmsYMIxnaKT0JkvDXZBCo3aVIOgEHB6gexOnikQvzQdKQV1Yd_hO2U9MnXXy0nFhl1StivDu5RGXcNKZTOFoQlK101_hJG8_zyKC52tWNtvMSviLBe6VyjpfwkY2GJPBEUSGObBh6UweqP89ZIWDTO91wzVu0gz"
      ],
      excerpt: "SPD Contracting, Inc., as the Design-Builder, is overseeing the design and construction of the MPD 4th District Headquarters Generator Replacement Project.",
      description1: "SPD Contracting, Inc., as the Design-Builder, is overseeing the design and construction of the MPD 4th District Headquarters Generator Replacement Project. The work includes removal of the existing generator and installation of new backup power systems to meet current code and operational requirements.",
      description2: "Phasing and logistics were planned to maintain continuous operations at the facility during construction. Close coordination with MPD and District agencies ensured minimal disruption and timely completion."
    },
    {
      id: "forest-ridge",
      slug: "forest-ridge-and-the-vistas",
      title: "Forest Ridge and The Vistas Apartments Renovations",
      category: "Government Housing",
      categoryLabel: "Government Housing",
      heroImage: IMG + "AB6AXuC1v3a5oBzJoxE663tWsWIw_gVpwKXUDkGbSizQMB7vilUMkF7SzOssScNHnSGmITs5ZHbgYzNX4wkKGZiXuieiMpYQZK6tlcveLojm3DLxBsWGo2hf-KyuWbqLLCe6lP2X3ja1pHulCoWfoVBp7nPaF5HuvAbZSp8rRBi0yRDvbIJJh0g3XuLfeUl5hj25ebLLWV0L-yljbd0vy4CwiP-9rmQpPtzDKzicO019pN3pXo9Ur_hm40k2pOtrICxn7cgwV5b7bGQ5PSaF",
      image: IMG + "AB6AXuC1v3a5oBzJoxE663tWsWIw_gVpwKXUDkGbSizQMB7vilUMkF7SzOssScNHnSGmITs5ZHbgYzNX4wkKGZiXuieiMpYQZK6tlcveLojm3DLxBsWGo2hf-KyuWbqLLCe6lP2X3ja1pHulCoWfoVBp7nPaF5HuvAbZSp8rRBi0yRDvbIJJh0g3XuLfeUl5hj25ebLLWV0L-yljbd0vy4CwiP-9rmQpPtzDKzicO019pN3pXo9Ur_hm40k2pOtrICxn7cgwV5b7bGQ5PSaF",
      galleryImages: [
        IMG + "AB6AXuC1v3a5oBzJoxE663tWsWIw_gVpwKXUDkGbSizQMB7vilUMkF7SzOssScNHnSGmITs5ZHbgYzNX4wkKGZiXuieiMpYQZK6tlcveLojm3DLxBsWGo2hf-KyuWbqLLCe6lP2X3ja1pHulCoWfoVBp7nPaF5HuvAbZSp8rRBi0yRDvbIJJh0g3XuLfeUl5hj25ebLLWV0L-yljbd0vy4CwiP-9rmQpPtzDKzicO019pN3pXo9Ur_hm40k2pOtrICxn7cgwV5b7bGQ5PSaF",
        IMG + "AB6AXuDvWOmeQ6Bf3RjXw7ObL4sEI8YMa8w6xV9nSzJksyZoOhCwZw2i-X7_AoISzmQOtD_2Wea9TpmldlcBisj4iZuqu_kc01t1mthTLTDHeYPKVRGagHE9kf0fz3CUVg-5QwInq5ItE3Rz7x9cq6wwHwGVXFUdJgZTtIY_FS1za2SyOV-jifU5wfcxJgRQIZNmUTZkTWx99GP4CLn0T1z_z5pKxOLb5gXtjyugqANg8ubrEi3VsSQKMj0Ovi3zI2ke8aXWagrTRCvQAprO",
        IMG + "AB6AXuBxD6bpHRp1-5Z_0rLDrrDMJnm7XdoncyHhlevv5od5R0GvJLyuwIGsRCepMMwbG6YqM97j_87lfRg7kJg0-DxWcnE3lwcz78tWxc_4FEsMo15UvSmsYMIxnaKT0JkvDXZBCo3aVIOgEHB6gexOnikQvzQdKQV1Yd_hO2U9MnXXy0nFhl1StivDu5RGXcNKZTOFoQlK101_hJG8_zyKC52tWNtvMSviLBe6VyjpfwkY2GJPBEUSGObBh6UweqP89ZIWDTO91wzVu0gz"
      ],
      excerpt: "Comprehensive rehabilitation initiative to preserve and enhance affordable housing units (Forest Ridge and The Vistas Apartments).",
      description1: "This project, now known as Skyline Apartments, was a comprehensive rehabilitation initiative to preserve and enhance 398 affordable housing units located in the District. SPD Contracting, Inc. provided construction management and general contracting services for phased renovations across multiple buildings.",
      description2: "Work included unit interior upgrades, common area improvements, facade and roofing repairs, and site work. All phases were completed with residents in place where possible, with strict adherence to safety and schedule milestones."
    },
    {
      id: "sherwood",
      slug: "sherwood-recreation-center",
      title: "Sherwood Recreation Center Exterior Improvements",
      category: "Recreational Facilities",
      categoryLabel: "Recreational Facilities",
      heroImage: IMG + "AB6AXuDvWOmeQ6Bf3RjXw7ObL4sEI8YMa8w6xV9nSzJksyZoOhCwZw2i-X7_AoISzmQOtD_2Wea9TpmldlcBisj4iZuqu_kc01t1mthTLTDHeYPKVRGagHE9kf0fz3CUVg-5QwInq5ItE3Rz7x9cq6wwHwGVXFUdJgZTtIY_FS1za2SyOV-jifU5wfcxJgRQIZNmUTZkTWx99GP4CLn0T1z_z5pKxOLb5gXtjyugqANg8ubrEi3VsSQKMj0Ovi3zI2ke8aXWagrTRCvQAprO",
      image: IMG + "AB6AXuDvWOmeQ6Bf3RjXw7ObL4sEI8YMa8w6xV9nSzJksyZoOhCwZw2i-X7_AoISzmQOtD_2Wea9TpmldlcBisj4iZuqu_kc01t1mthTLTDHeYPKVRGagHE9kf0fz3CUVg-5QwInq5ItE3Rz7x9cq6wwHwGVXFUdJgZTtIY_FS1za2SyOV-jifU5wfcxJgRQIZNmUTZkTWx99GP4CLn0T1z_z5pKxOLb5gXtjyugqANg8ubrEi3VsSQKMj0Ovi3zI2ke8aXWagrTRCvQAprO",
      galleryImages: [
        IMG + "AB6AXuDvWOmeQ6Bf3RjXw7ObL4sEI8YMa8w6xV9nSzJksyZoOhCwZw2i-X7_AoISzmQOtD_2Wea9TpmldlcBisj4iZuqu_kc01t1mthTLTDHeYPKVRGagHE9kf0fz3CUVg-5QwInq5ItE3Rz7x9cq6wwHwGVXFUdJgZTtIY_FS1za2SyOV-jifU5wfcxJgRQIZNmUTZkTWx99GP4CLn0T1z_z5pKxOLb5gXtjyugqANg8ubrEi3VsSQKMj0Ovi3zI2ke8aXWagrTRCvQAprO",
        IMG + "AB6AXuBxD6bpHRp1-5Z_0rLDrrDMJnm7XdoncyHhlevv5od5R0GvJLyuwIGsRCepMMwbG6YqM97j_87lfRg7kJg0-DxWcnE3lwcz78tWxc_4FEsMo15UvSmsYMIxnaKT0JkvDXZBCo3aVIOgEHB6gexOnikQvzQdKQV1Yd_hO2U9MnXXy0nFhl1StivDu5RGXcNKZTOFoQlK101_hJG8_zyKC52tWNtvMSviLBe6VyjpfwkY2GJPBEUSGObBh6UweqP89ZIWDTO91wzVu0gz"
      ],
      excerpt: "Exterior improvements and upgrades at Sherwood Recreation Center to enhance accessibility and durability.",
      description1: "SPD Contracting, Inc. completed exterior improvements and upgrades at Sherwood Recreation Center, including facade repairs, roofing, accessibility upgrades, and site improvements. The work was designed to extend the life of the facility and improve user experience.",
      description2: "Construction was sequenced to allow the center to remain open for key programs. All work met District standards and was delivered on schedule."
    },
    {
      id: "randall",
      slug: "randall-recreation-center",
      title: "Randall Recreation Center Project",
      category: "Recreational Facilities",
      categoryLabel: "Recreational Facilities",
      heroImage: IMG + "AB6AXuBxD6bpHRp1-5Z_0rLDrrDMJnm7XdoncyHhlevv5od5R0GvJLyuwIGsRCepMMwbG6YqM97j_87lfRg7kJg0-DxWcnE3lwcz78tWxc_4FEsMo15UvSmsYMIxnaKT0JkvDXZBCo3aVIOgEHB6gexOnikQvzQdKQV1Yd_hO2U9MnXXy0nFhl1StivDu5RGXcNKZTOFoQlK101_hJG8_zyKC52tWNtvMSviLBe6VyjpfwkY2GJPBEUSGObBh6UweqP89ZIWDTO91wzVu0gz",
      image: IMG + "AB6AXuBxD6bpHRp1-5Z_0rLDrrDMJnm7XdoncyHhlevv5od5R0GvJLyuwIGsRCepMMwbG6YqM97j_87lfRg7kJg0-DxWcnE3lwcz78tWxc_4FEsMo15UvSmsYMIxnaKT0JkvDXZBCo3aVIOgEHB6gexOnikQvzQdKQV1Yd_hO2U9MnXXy0nFhl1StivDu5RGXcNKZTOFoQlK101_hJG8_zyKC52tWNtvMSviLBe6VyjpfwkY2GJPBEUSGObBh6UweqP89ZIWDTO91wzVu0gz",
      galleryImages: [
        IMG + "AB6AXuBxD6bpHRp1-5Z_0rLDrrDMJnm7XdoncyHhlevv5od5R0GvJLyuwIGsRCepMMwbG6YqM97j_87lfRg7kJg0-DxWcnE3lwcz78tWxc_4FEsMo15UvSmsYMIxnaKT0JkvDXZBCo3aVIOgEHB6gexOnikQvzQdKQV1Yd_hO2U9MnXXy0nFhl1StivDu5RGXcNKZTOFoQlK101_hJG8_zyKC52tWNtvMSviLBe6VyjpfwkY2GJPBEUSGObBh6UweqP89ZIWDTO91wzVu0gz",
        IMG + "AB6AXuDvWOmeQ6Bf3RjXw7ObL4sEI8YMa8w6xV9nSzJksyZoOhCwZw2i-X7_AoISzmQOtD_2Wea9TpmldlcBisj4iZuqu_kc01t1mthTLTDHeYPKVRGagHE9kf0fz3CUVg-5QwInq5ItE3Rz7x9cq6wwHwGVXFUdJgZTtIY_FS1za2SyOV-jifU5wfcxJgRQIZNmUTZkTWx99GP4CLn0T1z_z5pKxOLb5gXtjyugqANg8ubrEi3VsSQKMj0Ovi3zI2ke8aXWagrTRCvQAprO",
        IMG + "AB6AXuAiyGks4jyMLMwQ4wLCg4gl3XV06YIhes4x0BUYEXthHNtgMw2fBqZJgT0-BqEVFxAIDx6HYz4FuVTZIyDjPjMxauMVhEM6H1_NWMKxIxUYCINMhuDCagKB4yNnAlfnKEeR1knKXAQOBMfav_RIcLG0J3FD8UAH1nVL9kl0YMJ_04qZ7lnLfqTODSXJ7x3DHr5iAWP0aOIwETxQRqiPsET9jO6LdOUI1nEz8CbN8T2NRL_oDDPYaVCz6g1UBamiHYg3oxjUiphgbPy3"
      ],
      excerpt: "Design and construction of the Randall Recreation Center, delivering modern recreational facilities for the community.",
      description1: "SPD Contracting, Inc. led the design and construction of the Randall Recreation Center, delivering modern recreational facilities for the community. The project included new construction and renovation of program spaces, gymnasium, pools, and support areas.",
      description2: "The facility was designed to meet current accessibility and sustainability standards, with durable finishes and efficient MEP systems. The center opened on schedule and has become a hub for community programming."
    }
  ];

  /** Obtener proyecto por slug */
  window.getProjectBySlug = function (slug) {
    if (!window.projectsData) return null;
    for (var i = 0; i < window.projectsData.length; i++) {
      if (window.projectsData[i].slug === slug) return window.projectsData[i];
    }
    return null;
  };

  /** Related: todos los proyectos excepto el que tiene este slug */
  window.getRelatedProjects = function (currentSlug) {
    if (!window.projectsData) return [];
    return window.projectsData.filter(function (p) { return p.slug !== currentSlug; });
  };

  /** Base path para links a páginas de proyecto (desde pages/ es project/, desde pages/project/ es mismo dir) */
  window.projectPageBase = "project/";

  function escapeHtml(str) {
    if (str == null) return "";
    var div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }

  function renderFeaturedTrack(trackEl) {
    if (!trackEl || !window.projectsData) return;
    var base = window.projectPageBase || "project/";
    var html = "";
    window.projectsData.forEach(function (p) {
      html +=
        '<div class="c-carousel__slide">' +
        '  <article class="c-carousel__card">' +
        '    <div class="c-carousel__card-image">' +
        '      <a href="' + base + p.slug + '.html"><img src="' + escapeHtml(p.image) + '" alt="' + escapeHtml(p.title) + '"/></a>' +
        "    </div>" +
        '    <div class="c-carousel__card-body">' +
        '      <p class="c-carousel__card-category">' + escapeHtml(p.categoryLabel || p.category) + "</p>" +
        '      <h3 class="c-carousel__card-title"><a href="' + base + p.slug + '.html">' + escapeHtml(p.title) + "</a></h3>" +
        "    </div>" +
        "  </article>" +
        "</div>";
    });
    trackEl.innerHTML = html;
  }

  function renderGalleryTrack(trackEl) {
    if (!trackEl || !window.projectsData) return;
    var html = "";
    window.projectsData.forEach(function (p) {
      var href = (window.projectPageBase || "project/") + p.slug + ".html";
      html +=
        '<div class="c-carousel__slide">' +
        '  <div class="gallery-slide-img">' +
        '    <a href="' + href + '"><img src="' + escapeHtml(p.image) + '" alt="' + escapeHtml(p.title) + '"/></a>' +
        "  </div>" +
        "</div>";
    });
    trackEl.innerHTML = html;
  }

  function renderRelatedTrack(trackEl, excludeSlug) {
    if (!trackEl || !window.projectsData) return;
    var base = window.projectPageBase || "project/";
    var list = excludeSlug ? window.getRelatedProjects(excludeSlug) : window.projectsData;
    var html = "";
    list.forEach(function (p) {
      var excerpt = p.excerpt ? (p.excerpt.length > 120 ? p.excerpt.slice(0, 117) + "..." : p.excerpt) : "";
      var href = base + p.slug + ".html";
      html +=
        '<div class="c-carousel__slide">' +
        '  <article class="related-card">' +
        '    <div class="thumb">' +
        '      <a href="' + href + '"><img src="' + escapeHtml(p.image) + '" alt="' + escapeHtml(p.title) + '"/></a>' +
        "    </div>" +
        '    <div class="body">' +
        "      <h3><a href=\"" + href + "\">" + escapeHtml(p.title) + "</a></h3>" +
        "      <p>" + escapeHtml(excerpt) + "</p>" +
        '      <a href="' + href + '" class="link">Read more →</a>' +
        "    </div>" +
        "  </article>" +
        "</div>";
    });
    trackEl.innerHTML = html;
  }

  /** Llena los tres carruseles en la landing Projects. related = todos (sin exclude). */
  window.renderProjectsPage = function () {
    var featuredTrack = document.querySelector(".featured-carousel .c-carousel__track");
    var galleryTrack = document.querySelector(".content-section[aria-label='Gallery'] .c-carousel__track");
    var relatedTrack = document.querySelector(".content-section[aria-label='Related Projects'] .c-carousel__track");
    if (featuredTrack) renderFeaturedTrack(featuredTrack);
    if (galleryTrack) renderGalleryTrack(galleryTrack);
    if (relatedTrack) renderRelatedTrack(relatedTrack, null);
  };
})();
