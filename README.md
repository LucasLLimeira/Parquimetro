# Lista de Tarefas com Next.js 15 e Testes Unitarios

Aplicacao de exemplo para praticar:

- Server Component no App Router
- Client Component com formulario controlado
- Hook personalizado para contagem de tarefas
- Testes unitarios com Jest e Testing Library

## Tecnologias

- Next.js 15 (App Router)
- TypeScript
- Jest
- React Testing Library

## Estrutura

```text
src/
	app/
		layout.tsx
		page.tsx
	components/
		ListaTarefas.tsx
		NovaTarefa.tsx
		TarefasClient.tsx
	hooks/
		useContadorDeTarefas.ts
	lib/
		tarefas.ts
	tests/
		NovaTarefa.test.tsx
		page.test.tsx
		useContadorDeTarefas.test.ts
	types/
		tarefa.ts
```

## Como executar

1. Instale as dependencias:

```bash
npm install
```

2. Rode o projeto em desenvolvimento:

```bash
npm run dev
```

3. Acesse:

```text
http://localhost:3000
```

## Como executar os testes

```bash
npm test
```

Modo watch:

```bash
npm run test:watch
```

Cobertura:

```bash
npm run test:coverage
```

## O que foi testado

- Componente NovaTarefa: renderizacao, validacao e submissao
- Hook useContadorDeTarefas com renderHook
- Renderizacao da pagina principal com tarefas simuladas
