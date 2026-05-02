# Notification System Design

## Stage 1: API Design

POST /notifications
GET /notifications

## Stage 2: Database

Table: notifications
- id
- user_id
- type
- message
- is_read
- created_at

## Stage 3: Optimization

CREATE INDEX idx_notifications 
ON notifications(studentId, isRead, createdAt DESC);

Use LIMIT 10 for pagination

## Stage 4: Improvements

- Use Redis cache
- Pagination
- WebSockets

## Stage 5: Scalability

- Use queue (Kafka)
- Async email sending
- Retry failed jobs

## Stage 6: Top Notifications

- Placement > Result > Event
- Sort by priority + timestamp
- Return top 10