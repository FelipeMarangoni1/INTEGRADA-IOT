       function showSection(section) {
            // Esconde todas as seções
            document.querySelectorAll('section').forEach(function(sec) {
                sec.classList.add('d-none');
            });
            // Exibe a seção selecionada
            document.getElementById(section).classList.remove('d-none');
        }

        function showTask(section, subject) {
            // Esconde todas as informações de tarefas
            document.querySelectorAll(`#task-info-${section}`).forEach(function(task) {
                task.classList.add('d-none');
            });
            // Exibe as informações da disciplina selecionada
            const taskInfo = document.getElementById(`task-info-${section}`);
            taskInfo.classList.remove('d-none');
            taskInfo.innerHTML = `<p>Informações sobre <strong>${subject}</strong> em breve...</p>`;
        }
   