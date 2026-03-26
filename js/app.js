
import { Cliente } from './classes.js';
import {
    criarCliente,
    buscarClientes,
    deletarCliente,
    validarCliente,
    emailJaExiste
} from './utils.js';

const nomeInput = document.getElementById('nome');
const emailInput = document.getElementById('email');
const btnSalvar = document.getElementById('btSalvar');
const lista = document.getElementById('listaClientes');

// ================= CADASTRAR =================
btnSalvar.addEventListener('click', async () => {
    const nome = nomeInput.value;
    const email = emailInput.value;

    if (!validarCliente(nome, email)) {
        alert('Preencha corretamente os campos.');
        return;
    }

    const clientes = await buscarClientes();

    if (emailJaExiste(clientes, email)) {
        alert('Email já cadastrado.');
        return;
    }

    const cliente = new Cliente(nome, email);

    const sucesso = await criarCliente(cliente);

    if (sucesso) {
        alert('Cliente cadastrado com sucesso!');
        nomeInput.value = '';
        emailInput.value = '';
        listarClientes();
    } else {
        alert('Erro ao cadastrar cliente.');
    }
});

// ================= LISTAR =================
async function listarClientes() {
    const clientes = await buscarClientes();

    lista.innerHTML = '';

    clientes.map(cliente => {
        const li = document.createElement('li');

        li.innerHTML = `
            ${cliente.nome} - ${cliente.email}
            <button class="btn-delete" data-id="${cliente._id}">Deletar</button>
        `;

        lista.appendChild(li);
    });
}

// ================= DELETAR =================
lista.addEventListener('click', async (e) => {
    if (e.target.tagName === 'BUTTON') {
        const id = e.target.dataset.id;

        const sucesso = await deletarCliente(id);

        if (sucesso) {
            alert('Cliente deletado com sucesso!');
            listarClientes();
        } else {
            alert('Erro ao deletar cliente.');
        }
    }
});

// ================= INICIAR =================
listarClientes();