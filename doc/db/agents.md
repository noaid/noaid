## Structure
| key      | index | type     | not empty| desc        |
| :---     | :---  | :---     | :---     | :---        |
| _id      | true  | mongoID  | true     | primary key |
| _uid     | true  | mongoID  | true     | agent name  |
| _cts     | false  | datetime | true     | create time  |
| _uts     | false  | datetime | true     | modify time  |
| schedule | true  | boolean  | true     | schedule mode  |
| type    | true  | string  | true     | agent type  |
| name     | false | string   | true     | agent name  |
| keepEvents | false  | boolean  | true     | agent name  |
| _uid    | true  | mongoID  | true     | agent name  |
| _uid    | true  | mongoID  | true     | agent name  |
