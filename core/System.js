/**
 * webOS1 System Logic
 * Fetches system.json and generates the Bento Grid
 */
const SystemManager = {
    // 1. Configuration
    configUrl: 'https://raw.githubusercontent.com',

    // 2. Main initializer
    init: async function() {
        console.log("[System] Initializing Web4 Services...");
        try {
            const response = await fetch(this.configUrl);
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            
            const data = await response.json();
            this.renderBentoGrid(data);
        } catch (error) {
            console.error("[System] Failed to load system configuration:", error);
        }
    },

    // 3. Dynamic Grid Generator
    renderBentoGrid: function(data) {
        const grid = document.getElementById('app-landing');
        if (!grid) return;

        // Clear existing content
        grid.innerHTML = '';

        // Create modular tiles based on your JSON structure
        this.addTile(grid, 'Main Card', `${data.system.hostname} [${data.system.protocol}]`, 'main-card');
        this.addTile(grid, 'AI AGENT STATUS', data.ai_agent_manager.status, 'status-card');
        this.addTile(grid, 'NEURAL LOAD', data.ai_agent_manager.neural_load, 'pid-card');
        this.addTile(grid, 'AI INSIGHTS', `Model: ${data.ai_agent_manager.active_model}\nMemory: ${data.ai_agent_manager.memory_layer}`, 'ai-card');
        this.addTile(grid, 'BLOCKCHAIN ID', data.network.identity, 'identity-card');
        this.addTile(grid, 'RUNTIME', data.security.runtime, 'runtime-card');
    },

    // Helper: Create a single "Firm" Bento item
    addTile: function(parent, label, value, customClass) {
        const tile = document.createElement('div');
        tile.className = `bento-item ${customClass}`;
        tile.innerHTML = `
            <span class="label">${label}</span>
            <div class="value">${value}</div>
        `;
        parent.appendChild(tile);
    }
};

// Start the system when the page loads
document.addEventListener('DOMContentLoaded', () => SystemManager.init());
