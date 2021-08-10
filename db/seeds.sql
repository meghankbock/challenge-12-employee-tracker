INSERT INTO departments(name)
VALUES
('Management'),
('Engineering'),
('UX'),
('QA/Testing'),
('Sales'),
('Marketing'),
('Human Resources');

INSERT INTO roles(title, salary, department)
VALUES
('CEO', 250,000.00, 1),
('CTO', 225,000.00, 1),
('CFO', 200,000.00, 1),
('Engineering Team Lead', 150,000.00, 2),
('Senior Backend Engineer', 125,000.00, 2),
('Junior Backend Engineer', 100,000.00, 2),
('UX Team Lead', 150,000.00, 3),
('UX Designer', 125,000.00, 3),
('Senior Frontend Developer', 125,000.00, 3),
('Junior Frontend Developer', 100,000.00, 3),
('QA Team Lead', 100,000.00, 4),
('QA Analyst', 75,000.00, 4),
('Sales Team Lead', 100,000.00, 5),
('Sales Rep', 75,000.00, 5),
('Marketing Team Lead', 100,000.00, 6),
('Marketing Analyst', 75,000.00, 6),
('HR Team Lead', 75,000.00, 7);

INSERT INTO employees(first_name, last_name, role_id, manager_id)
VALUES
('Serena', 'Williams', 1, null),
('Naomi', 'Osaka', 2, null),
('Megan', 'Rapinoe', 3, null),
('Lebron', 'James', 4, null),
('Kevin', 'Durant', 5, 4),
('Devin', 'Booker', 6, 4),
('Damian', 'Lillard', 7, null),
('Trae', 'Young', 8, 7),
('Draymond', 'Green', 9, 7),
('Jrue', 'Holiday', 10, 7),
('Giannis', 'Antetokounmpo', 11, null),
('Bobby', 'Portis', 12, 11),
('Lionel', 'Messi', 13, null),
('Landon', 'Donovan', 14, 13),
('Cristiano', 'Ronaldo', 15, null),
('Jozy', 'Altidore', 16, 15),
('Patrick', 'Mahomes', 17, null);

