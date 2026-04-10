const PORTFOLIO_CONFIG = {
    loaderText: "Ładowanie...",

    // --- 2. GŁÓWNE INFORMACJE ---
    profileName: "Agnieszka Oleksik",
    profilePicture: "media/b88bd25e-0800-4c73-8b7c-8d3499823428_rwc_0x0x3746x5619x4096.jpg",
    
    // --- 3. DANE KONTAKTOWE (Możesz używać tagów HTML np. <strong>, <a>, <br>) ---
    contactInfoHTML: `
        <strong>Fotografia • Social Media • Grafika</strong>
        <a href="mailto:agnieszka@oleksik.works" class="quick-select">agnieszka@oleksik.works</a><br>
        <a href="https://www.instagram.com/oleksikfoto/" target="_blank" class="quick-select">@oleksikfoto</a>
    `,

    // --- 4. BAZA ZDJĘĆ I KATEGORII ---
    mediaData: [
    // FOTOGRAFIA - portret
    { 
        type: 'image', 
        src: 'media/portret/050d24ee-3f90-4672-a2ca-f850e1066840_rw_3840.jpg', 
        mainCat: 'FOTOGRAFIA', 
        subCat: 'portret', 
        description: '' 
    },
    { 
        type: 'image', 
        src: 'media/portret/0aad19b9-3749-4107-a91d-695db77da58c_rw_3840.jpg', 
        mainCat: 'FOTOGRAFIA', 
        subCat: 'portret', 
        description: '' 
    },
    { 
        type: 'image', 
        src: 'media/portret/3cd6ee1c-dee7-4183-8753-67d69c14602e_rw_1920.jpg', 
        mainCat: 'FOTOGRAFIA', 
        subCat: 'portret', 
        description: '' 
    },
    { 
        type: 'image', 
        src: 'media/portret/7824fdf9-d073-4236-ae26-dc471d51f929_rw_3840.jpg', 
        mainCat: 'FOTOGRAFIA', 
        subCat: 'portret', 
        description: '' 
    },
    { 
        type: 'image', 
        src: 'media/portret/93975c81-022f-4655-a7f4-dc1c706e2d19_rw_1920.jpg', 
        mainCat: 'FOTOGRAFIA', 
        subCat: 'portret', 
        description: '' 
    },
    { 
        type: 'image', 
        src: 'media/portret/b93a8527-0158-435a-9cef-fccd5e532dd5_rw_1920.jpg', 
        mainCat: 'FOTOGRAFIA', 
        subCat: 'portret', 
        description: '' 
    },
    { 
        type: 'image', 
        src: 'media/portret/bf86bf53-00da-4f80-b75b-afc920ce83d1_rw_1920.jpg', 
        mainCat: 'FOTOGRAFIA', 
        subCat: 'portret', 
        description: '' 
    },
    { 
        type: 'image', 
        src: 'media/portret/c112bce9-17b0-4903-b714-92b0f9165a0c_rw_3840.jpg', 
        mainCat: 'FOTOGRAFIA', 
        subCat: 'portret', 
        description: '' 
    },
    { 
        type: 'image', 
        src: 'media/portret/c633b94f-cc9d-4d31-9e2a-c92870e00a63_rw_1920.jpg', 
        mainCat: 'FOTOGRAFIA', 
        subCat: 'portret', 
        description: '' 
    },
    { 
        type: 'image', 
        src: 'media/portret/cf57abdc-6d5c-4ed4-aaf4-58c430357016_rw_3840.jpg', 
        mainCat: 'FOTOGRAFIA', 
        subCat: 'portret', 
        description: '' 
    },

    // FOTOGRAFIA - produkt
    { 
        type: 'image', 
        src: 'media/produkt/71e99d3a-74d9-4680-aaaa-f002b50bfe29_rw_3840.jpg', 
        mainCat: 'FOTOGRAFIA', 
        subCat: 'produkt', 
        description: '' 
    },
    { 
        type: 'image', 
        src: 'media/produkt/761cbe59-cb3d-4c07-af7f-70489e920a15_rw_3840.jpg', 
        mainCat: 'FOTOGRAFIA', 
        subCat: 'produkt', 
        description: '' 
    },
    { 
        type: 'image', 
        src: 'media/produkt/9fb3dc96-3362-42e7-ae0d-faf29a234688_rw_1920.jpg', 
        mainCat: 'FOTOGRAFIA', 
        subCat: 'produkt', 
        description: '' 
    },
    { 
        type: 'image', 
        src: 'media/produkt/b7e904a8-5d8a-46e8-8153-a59dc16d24a5_rw_3840.jpg', 
        mainCat: 'FOTOGRAFIA', 
        subCat: 'produkt', 
        description: '' 
    },

    // MULTIMEDIA - fotomontaż
    { 
        type: 'image', 
        src: 'media/fotomontaz/6d949aab-7dee-4f95-9d32-c2532ab072eb_rw_1920.jpg', 
        mainCat: 'MULTIMEDIA', 
        subCat: 'fotomontaż', 
        description: '' 
    },
    { 
        type: 'image', 
        src: 'media/fotomontaz/729ede90-c9a1-4cb0-9263-6e2e069954f3_rw_1920.jpg', 
        mainCat: 'MULTIMEDIA', 
        subCat: 'fotomontaż', 
        description: '' 
    },
    { 
        type: 'image', 
        src: 'media/fotomontaz/c752a41f-5d57-49bb-ac3b-a73fb8c3430a_rw_1920.jpg', 
        mainCat: 'MULTIMEDIA', 
        subCat: 'fotomontaż', 
        description: '' 
    },
    { 
        type: 'image', 
        src: 'media/fotomontaz/f97c750a-eae1-41ad-93c0-e5d0fa365dcc_rw_1920.jpg', 
        mainCat: 'MULTIMEDIA', 
        subCat: 'fotomontaż', 
        description: '' 
    },

    // MULTIMEDIA - grafika
    { 
        type: 'image', 
        src: 'media/grafika/03259c93-bf6d-4e24-bea3-f44e35489031_rw_1920.jpg', 
        mainCat: 'MULTIMEDIA', 
        subCat: 'grafika', 
        description: '' 
    },
    { 
        type: 'image', 
        src: 'media/grafika/4aeff55d-e92e-4a28-977e-72aeaf8cf712_rw_3840.jpg', 
        mainCat: 'MULTIMEDIA', 
        subCat: 'grafika', 
        description: '' 
    },
    { 
        type: 'image', 
        src: 'media/grafika/8e451584-ed31-4f25-9b40-9906acd330d5_rw_1920.jpg', 
        mainCat: 'MULTIMEDIA', 
        subCat: 'grafika', 
        description: '' 
    },
    { 
        type: 'image', 
        src: 'media/grafika/aca7b0db-071f-4b71-b52d-7f21339ceb3f_rw_3840.jpg', 
        mainCat: 'MULTIMEDIA', 
        subCat: 'grafika', 
        description: '' 
    },
    { 
        type: 'image', 
        src: 'media/grafika/d83d37ba-7283-4eb0-bd3b-955869229853_rw_1920.jpg', 
        mainCat: 'MULTIMEDIA', 
        subCat: 'grafika', 
        description: '' 
    }
]
};