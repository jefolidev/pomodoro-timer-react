# Requisitos Funcionais

- [x] O usuário deve poder criar sessões; ✅ 2025-01-21
- [x] O usuário deve poder interromper sessões;
- [x] O usuário deve poder pausar sessões; ✅ 2025-01-21
- [x] O usuário deve poder editar o total de tempo da sessão depois de iniciada, não podendo ser maior que o tempo da sessão atual;
- [x] O usuário deve poder alterar o tempo das pausas curtas e longas;
- [x] O usuário deve poder alterar a quantidade de pausas até a pausa maior;

# Requisitos de Negócios

- [ ] O formulário deve receber pelo usuário: nome, tempo da sessão em minutos e quantidade de pausas.
- [ ] O formulário ao ser enviado deve atribuir automaticamente: uuid, data de criação, status (em andamento quando for iniciada), tempo de uma pausa longa e curta, quantidade de pausas até uma pausa longa, data de que foi concluída (que será indefinida de início) e data de desde quando a tarefa foi pausada (que retornará a ser nula depois que ela ser resumida);
- [ ] Somente um timer pode estar pausado, não sendo possível criar mais de um temporizador. Se um for pausado o mesmo deve continuar ativo até ser concluído ou cancelado;
- [ ] Ao atualizar a página o contador deve continuar de onde parou.
- [ ] O 