import { EntitySchema } from "typeorm";

const History =  new EntitySchema({
    name: 'History',
    tableName: 'history',
    columns: {
        id: {
            primary: true,
            type: 'int',
            generated: true
        },
        userid: {
            type: 'int',
            nullable: false
        },
        action: {
            type: 'varchar',
            nullable: false
        },
        timestamp: {
            type: 'timestamp',
            default: () => 'CURRENT_TIMESTAMP'
        }
    }
});

export default History;