SQLite format 3   @        	                                                             .r�B 
� A�J�S
�                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              g7�indexsessions_status_indexsessions	CREATE INDEX `sessions_status_index` on `sessions` (`status`)`3indexsessions_name_indexsessionsCREATE INDEX `sessions_name_index` on `sessions` (`name`)Z/windexsessions_id_indexsessionsCREATE INDEX `sessions_id_index` on `sessions` (`id`)�}�MtablesessionssessionsCREATE TABLE `sessions` (`id` char(36), `name` varchar(255) not null, `status` text check (`status` in ('pending', 'in_progress', 'completed')) not null, `short_break_time` float not null, `long_break_time` float not null, `sessions_until_long_break` integer not null, `amount_session_breaks` integer not null, `amount_session_minutes` float not null, `created_at` datetime not null default CURRENT_TIMESTAMP, `completed_at` datetime, `pending_since` datetime, primary key (`id`))/C indexsqlite_autoindex_sessions_1sessions       �"55�gtableknex_migrations_lockknex_migrations_lockCREATE TABLE `knex_migrations_lock` (`index` integer not null primary key autoincrement, `is_locked` integer)P++Ytablesqlite_sequencesqlite_sequenceCREATE TABLE sqlite_sequence(name,seq)�<++�/tableknex_migrationsknex_migrationsCREATE TABLE `knex_migrations` (`id` integer not null primary key autoincrement, `name` varchar(255), `batch` integer, `migration_time` datetime)   � �                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  2 [	20250120172242_create-sessions-table.ts���(�   � ��                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       +	knex_migrations5	knex_migrations_lock   � �                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
� �A�}�P��2�t
�                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            `U1	3  ae1d94cc-b536-4e53-9c44-c25a84bbce12Estudar Arch Linuxpending �2025-01-21 02:04:17pU13  b983f526-59d9-4344-9959-9a5ebe81d256Estudar Arch Linuxpending?�.)��GX?�.)��GX< �2025-01-21 02:04:03]U+	3  fcfa94c6-159f-40a5-b19e-5e5d43167a73Estudar Flutterpending �2025-01-21 02:03:43]U+	3  9aeb9ed7-2f51-41ca-99c2-ae829e8eeb4cEstudar Flutterpending0 �2025-01-21 02:03:08]
U+	3  fea19412-708c-44c6-9d18-29395995acbaEstudar Flutterpending0 �2025-01-21 02:03:01]	U+	3  777f6fea-2ae4-4eae-8537-6e77dae2e42eEstudar Flutterpending0 �2025-01-21 02:02:43^U+	3  f9857e76-5358-4c07-9b54-dc6fd3cbcb09Estudar DevOps4pending0 �2025-01-21 02:02:08]U)	3  dca04026-75c8-4944-ad17-03fab4fe53bdEstudar DevOpspending0 �2025-01-21 02:01:09lU)3  a185f9f8-974f-43de-a42f-8a6d3b915b08Estudar DevOpspending@#333333@3333333 �2025-01-21 02:00:45^U)3  6c9ecc7d-a18f-4cf7-8de2-06894518e49dEstudar DevOpspending  �2025-01-21 01:59:59aU+3  974863c2-bd65-4eed-a9e3-54c54092429aEstudar MongoDBpending,�h2025-01-20 20:59:23_U'3  a360eef8-1520-449e-8bdf-ab8a5db04122Completar TCCpending,� �2025-01-20 18:46:13]U%3  a4e00812-6d76-43a3-9e07-0d79a6460146Estudar Nodepending,�x2025-01-20 18:34:44^U'3  6d4531cd-5d48-42e4-837b-46d3131859e4Estudar Reactpending��2025-01-20 18:30:51
   � 4��]>������g                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               (Uae1d94cc-b536-4e53-9c44-c25a84bbce12(Ub983f526-59d9-4344-9959-9a5ebe81d256(Ufcfa94c6-159f-40a5-b19e-5e5d43167a73(U9aeb9ed7-2f51-41ca-99c2-ae829e8eeb4c(Ufea19412-708c-44c6-9d18-29395995acba
(U777f6fea-2ae4-4eae-8537-6e77dae2e42e	(Uf9857e76-5358-4c07-9b54-dc6fd3cbcb09(Udca04026-75c8-4944-ad17-03fab4fe53bd(Ua185f9f8-974f-43de-a42f-8a6d3b915b08(U6c9ecc7d-a18f-4cf7-8de2-06894518e49d(U974863c2-bd65-4eed-a9e3-54c54092429a(Ua360eef8-1520-449e-8bdf-ab8a5db04122(Ua4e00812-6d76-43a3-9e07-0d79a6460146'U	6d4531cd-5d48-42e4-837b-46d3131859e4
   � 4��]>������g                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               (Uae1d94cc-b536-4e53-9c44-c25a84bbce12(Ub983f526-59d9-4344-9959-9a5ebe81d256(Ufcfa94c6-159f-40a5-b19e-5e5d43167a73(U9aeb9ed7-2f51-41ca-99c2-ae829e8eeb4c(Ufea19412-708c-44c6-9d18-29395995acba
(U777f6fea-2ae4-4eae-8537-6e77dae2e42e	(Uf9857e76-5358-4c07-9b54-dc6fd3cbcb09(Udca04026-75c8-4944-ad17-03fab4fe53bd(Ua185f9f8-974f-43de-a42f-8a6d3b915b08(U6c9ecc7d-a18f-4cf7-8de2-06894518e49d(U974863c2-bd65-4eed-a9e3-54c54092429a(Ua360eef8-1520-449e-8bdf-ab8a5db04122(Ua4e00812-6d76-43a3-9e07-0d79a6460146'U	6d4531cd-5d48-42e4-837b-46d3131859e4
   � ����kWC/���                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         1Estudar Arch Linux1Estudar Arch Linux+Estudar Flutter+Estudar Flutter+Estudar Flutter
+Estudar Flutter	+Estudar DevOps4)Estudar DevOps)Estudar DevOps)Estudar DevOps+Estudar MongoDB'Completar TCC%Estudar Node'	Estudar React
   Y ����������}qeY                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     pendingpendingpendingpendingpending
pending	pendingpendingpendingpendingpendingpendingpending
	pending