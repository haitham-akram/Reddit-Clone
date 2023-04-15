BEGIN;
INSERT INTO users (username, email, password)
values (
        'haitham',
        'haitham@gmail.com',
        '$2b$10$d4K/2Gd.8k/2C7TADt0XIuvn9lpUZQF1COwgH/rIf/q5I1obtcMmy'
    ),
    (
        'batra',
        'batra@gmail.com',
        '$2b$10$d4K/2Gd.8k/2C7TADt0XIuvn9lpUZQF1COwgH/rIf/q5I1obtcMmy'
    );
INSERT INTO posts (title, content, images, user_id)
values (
        'test post',
        'test post content',
        'https://cdn.shopify.com/s/files/1/0614/8309/0107/collections/Lollipops-Suckers-CandyStore-com-40_360x.jpg?v=1677188441',
        1
    ),
    (
        'test post 2',
        'test post content',
        'https://cdn.shopify.com/s/files/1/0614/8309/0107/collections/Lollipops-Suckers-CandyStore-com-40_360x.jpg?v=1677188441',
        2
    );
INSERT INTO comments (content, user_id, post_id)
values('test comment', 1, 1),
    ('test comment 2', 2, 2);
INSERT INTO votes (type, user_id, post_id)
values('up', 1, 1),
    ('down', 2, 2);
COMMIT;