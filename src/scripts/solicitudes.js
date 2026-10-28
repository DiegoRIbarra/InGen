(function () {
    const STORAGE_KEY = 'ingen_solicitudes';

    window.SolicitudesInGen = {
        obtenerTodas: function () {
            try {
                const solicitudes = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
                return Array.isArray(solicitudes) ? solicitudes : [];
            } catch (error) {
                return [];
            }
        },
        guardarTodas: function (solicitudes) {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(solicitudes));
        },
        eliminarTodas: function () {
            localStorage.removeItem(STORAGE_KEY);
        }
    };
})();