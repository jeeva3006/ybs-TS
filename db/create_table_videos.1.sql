CREATE TABLE videos (
id varchar(100),
videoId varchar(100) UNIQUE,
title varchar(150),
description TEXT(6000),
thumbnail varchar(150),
publishedAt varchar(100),
channelId varchar(100),
channelTitle varchar(100),
tags JSON,
duration varchar(50),
dimension varchar(20),
definition varchar(20),
viewCount varchar(20),
likeCount varchar(20),
commentCount varchar(20)
);

SET SQL_SAFE_UPDATES = 0;

delete from videos;

drop table videos;

select * from videos;