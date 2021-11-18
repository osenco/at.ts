# Africa's Talking TypeScript Package

## Install

```bash
yarn add '@osenco/africastalking'
```

## Initialize

```typescript
import { AfricasTalking }, ATConfig from '@osenco/africastalking'

const at = new AfricasTalking({
    username: '',
    apiKey: '',
    from: ''
})
```

## Send SMS

### Send one message to one

```typescript
at.sms('Hello there').to(254705459494).send();
```

### Send one message to many

```typescript
at.sms('Hello there').to([254705459494, 254115911301]).send();
```

### Send unique messages

### With template

```typescript
at.smsManyTemplate([254705459494, 254115911301], 'Hello there :name', {name, amount});
```

### Predefined

```typescript
at.smsManyDefine({'254705459494':'Hello there Mauko'}).send();
```

## Check balance

```typescript
const balance = at.balance()
```
