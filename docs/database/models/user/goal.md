# User goals

This page contains info about user goals database schema

## Schema

| Field       | Type    | Meaning                                                                                                                   |
| ----------- | ------- | ------------------------------------------------------------------------------------------------------------------------- |
| id          | integer | Unique auto-increment identifier of user goal                                                                             |
| name        | text    | Name of user goal                                                                                                         |
| description | text    | Description of user goal                                                                                                  |
| complete    | 0 \| 1  | Complete state of user goal. Considers completed(1) if all of steps/sub-steps are completed. Otherwise - not completed(0) |
