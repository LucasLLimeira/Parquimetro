
export const API_URL = "https://crudcrud.com/api/74b13f599683409f9ac93d6a0e145723/clientes";

// ================= CRIAR =================
export async function criarCliente(cliente) {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(cliente)
    });

    return response.ok;
}

// ================= LISTAR =================
export async function buscarClientes() {
    const response = await fetch(API_URL);
    return response.json();
}

// ================= DELETAR =================
export async function deletarCliente(id) {
    const response = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE'
    });

    return response.ok;
}

// ================= VALIDAR =================
export function validarCliente(nome, email) {
    return nome.trim() !== '' && email.includes('@');
}

export function emailJaExiste(clientes, email) {
    return clientes.some(cliente => cliente.email === email);
}