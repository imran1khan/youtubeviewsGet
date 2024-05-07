const axios = require('axios');

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: 'https://www.youtube.com/watch?v=tPl470Rgqg0',
  headers: { 
    'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7', 
    'accept-language': 'en-US,en;q=0.9', 
    'cache-control': 'max-age=0', 
    'cookie': 'NID=511=T2NI-K0pWPxB5R_Htoe5c0p2_mT0tOyD0owMx69QSESaFzluhbQlITspBLxof-LVvzcGsCp00O1XwAiYF0ge6z8b6RMqjt4s-g2XZ-SdrqA81fgVhM01-UfaPWQGwu6uIDNaE12LTMx78V6HMb3X3rkoD1QZZi2-Sd34vFq0kkras1nGdDmdF-EY1g8kIF5N2koIBcbpwwZ7t30ANHNdTsg; HSID=AYx-wND8ynS0qzSx5; SSID=AVsqeYnaup5gRvTkW; APISID=P7iCFDnKxUXBqBpW/ASNqPSG1xEaqw_8un; SAPISID=xmwTa9XEp7aPVzz6/AFRlDukydW9YarZBj; __Secure-1PAPISID=xmwTa9XEp7aPVzz6/AFRlDukydW9YarZBj; __Secure-3PAPISID=xmwTa9XEp7aPVzz6/AFRlDukydW9YarZBj; VISITOR_PRIVACY_METADATA=CgJJThIEGgAgXA%3D%3D; VISITOR_PRIVACY_METADATA=CgJJThIEGgAgXA%3D%3D; SID=g.a000iwjoT3MHROWiC2hnMTW92nfPRzhoHG_O48eqyRsS5f6r4C4Lt7g6xHOF3P5Z7SyUBJ0uggACgYKASMSAQASFQHGX2MiiWyHEqQgPG1UjyFjGnc5rxoVAUF8yKoHdyN_BIA4ep_681b6oX5i0076; __Secure-1PSID=g.a000iwjoT3MHROWiC2hnMTW92nfPRzhoHG_O48eqyRsS5f6r4C4L2U4i3SIQ2K1hnwk9jQP-QQACgYKAZcSAQASFQHGX2MiW9jtD8InoYT1nmml9PpuqhoVAUF8yKoKhMtVk99PyfDCOvlLnPnb0076; LOGIN_INFO=AFmmF2swRgIhALiEVhuoSOOF6c5dr6iPXEW-HlI1bpffo0NJrYdDt32ZAiEA_OFS9EXsyLgMyiOdqB5L4z9pRUO88HSk0m8PSRJsj2c:QUQ3MjNmeDB0NWlhdmxzNkIxbkx4bzZDY3JfOHR2U1FXbTYwckdvS0FoMDhwZk5tS2MycGpORkUySmZWN1RWZW5XMGFFM2x0dGQwQUVaZUVHM2ZBYm16ZHlKR1pqZ1dCSEM3RFJYVGNwcnZWaGJmd3VSVHRNa0h4VEJzUkI5bWREamVjSXVrS1BkZG5nZXJCT3lwNnVZM051ZER3YklRclNB; VISITOR_INFO1_LIVE=72xpd39CmEg; __Secure-3PSID=g.a000iwjoT3MHROWiC2hnMTW92nfPRzhoHG_O48eqyRsS5f6r4C4LXewu-8lTLzK6_j5t91_3KAACgYKAbcSAQASFQHGX2MiHp0ET2J5NZGEMakWxwTFrhoVAUF8yKrAYpjqgzGt-07ElfF-s_wM0076; YSC=C0eR7sVawrA; PREF=f6=40000000&f7=4140&tz=Asia.Calcutta&f5=20000; __Secure-1PSIDTS=sidts-CjIBLwcBXIcN2ujG38c6rwL-xY6pX8pZ2On8sL9iEdfY4-UlydyWio6kUXbKD4t38TuWihAA; __Secure-3PSIDTS=sidts-CjIBLwcBXIcN2ujG38c6rwL-xY6pX8pZ2On8sL9iEdfY4-UlydyWio6kUXbKD4t38TuWihAA; SIDCC=AKEyXzUjrs2qRtrq7A06xEPPWoJL4kpdRSTByf7ccaaAgYhvL7cDza7CjuYNc70lFik8MNeG4oYD; __Secure-1PSIDCC=AKEyXzUfNQyMdbWrBDBbvhLP0DjNnF2D8opNGQyOB50SJwwa1V5EmiJuCnVKshcMjLxKqBetpkw; __Secure-3PSIDCC=AKEyXzXTOXJE-RBOavUvzbs1XjNWuhFQYhsbSiE4Uvt73NrfG_Hx0MZd0eMWSot69VXarMIA4Ry7', 
    'priority': 'u=0, i', 
    'sec-ch-ua': '"Chromium";v="124", "Google Chrome";v="124", "Not-A.Brand";v="99"', 
    'sec-ch-ua-arch': '"x86"', 
    'sec-ch-ua-bitness': '"64"', 
    'sec-ch-ua-full-version': '"124.0.6367.119"', 
    'sec-ch-ua-full-version-list': '"Chromium";v="124.0.6367.119", "Google Chrome";v="124.0.6367.119", "Not-A.Brand";v="99.0.0.0"', 
    'sec-ch-ua-mobile': '?0', 
    'sec-ch-ua-model': '""', 
    'sec-ch-ua-platform': '"Windows"', 
    'sec-ch-ua-platform-version': '"15.0.0"', 
    'sec-ch-ua-wow64': '?0', 
    'sec-fetch-dest': 'document', 
    'sec-fetch-mode': 'navigate', 
    'sec-fetch-site': 'same-origin', 
    'sec-fetch-user': '?1', 
    'service-worker-navigation-preload': 'true', 
    'upgrade-insecure-requests': '1', 
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36', 
    'x-client-data': 'CIq2yQEIo7bJAQiKksoBCKmdygEIuvHKAQiVocsBCIWgzQEI4uzNAQjojc4BGPXJzQE='
  }
};

export async function makeRequest() {
  try {
    const response = await axios.request(config);
    //console.log(JSON.stringify(response.data));
    console.log(`request`)
  }
  catch (error) {
    console.log(error);
  }
}

// makeRequest();
