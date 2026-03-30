class CentralDeLuzes {
    static instance = null;

    constructor() {
        if (CentralDeLuzes.instance) {
            return CentralDeLuzes.instance;
        }
        
        // Estado inicial das luzes
        this.statusLuzes = {
            quarto: false,
            sala: false,
            cozinha: false,
            banheiro: false
        };

        CentralDeLuzes.instance = this;
    }

    static getInstance() {
        if (!CentralDeLuzes.instance) {
            CentralDeLuzes.instance = new CentralDeLuzes();
        }
        return CentralDeLuzes.instance;
    }

    ligar(comodo) {
        if (this.statusLuzes.hasOwnProperty(comodo)) {
            this.statusLuzes[comodo] = true;
            this.updateUI(comodo, true);
        }
    }

    desligar(comodo) {
        if (this.statusLuzes.hasOwnProperty(comodo)) {
            this.statusLuzes[comodo] = false;
            this.updateUI(comodo, false);
        }
    }

    updateUI(comodo, status) {
        const roomCard = document.getElementById(`room-${comodo}`);
        const statusDisplay = document.getElementById('status-message');
        const systemStatus = document.getElementById('system-status');

        if (roomCard) {
            if (status) {
                roomCard.classList.add('light-on');
                statusDisplay.innerText = `Luz do ${comodo} ligada`;
                statusDisplay.style.color = 'var(--accent-on)';
                systemStatus.innerText = `Luz ligada no: ${comodo}`;
            } else {
                roomCard.classList.remove('light-on');
                statusDisplay.innerText = `Luz do ${comodo} desligada`;
                statusDisplay.style.color = 'var(--text-secondary)';
                systemStatus.innerText = `Luz desligada no: ${comodo}`;
            }
        }
    }
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    const central = CentralDeLuzes.getInstance();
    const buttons = document.querySelectorAll('button[data-comodo]');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const comodo = button.getAttribute('data-comodo');
            const action = button.getAttribute('data-action');

            if (action === 'ligar') {
                central.ligar(comodo);
            } else if (action === 'desligar') {
                central.desligar(comodo);
            }
        });
    });

    // Verificação de Singleton no console (para o desenvolvedor)
    const c1 = new CentralDeLuzes();
    const c2 = CentralDeLuzes.getInstance();
    console.log('Verificação Singleton (o resultado deve ser true):', c1 === c2);
});
