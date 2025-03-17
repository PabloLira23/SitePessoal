document.addEventListener('DOMContentLoaded', () => {
    // Atualizar informações do perfil
    const updateProfile = (name, title, bio) => {
        document.querySelector('.name').textContent = name;
        document.querySelector('.title').textContent = title;
        document.querySelector('.bio').textContent = bio;
    };

    // Informações do perfil
    updateProfile(
        'Pablo Thomaz Lira',
        'Desenvolvedor Web Full Stack | Analista de Sistemas',
        'Profissional de tecnologia com experiência em desenvolvimento web full stack, análise de sistemas e soluções digitais. Apaixonado por criar aplicações web modernas e eficientes que resolvem problemas reais.'
    );
});
