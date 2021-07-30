<!--
 * @Date: 2021-07-26 17:44:04
 * @LastEditors: Jecosine
 * @LastEditTime: 2021-07-28 02:59:07
-->

# vocabularyx

## Database

### Entity

- word
- notebook
- plan
- section
- tag

### Word

```typescript
interface IWord {
  private id: string,
  spelling: string,
  pos: string
}
```
