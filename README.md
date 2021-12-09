# Africa's Talking TypeScript Package

## Install

```bash
yarn add @osenco/africastalking
```

## Initialize

```typescript
import { AfricasTalking }, ATConfig from '@osenco/africastalking'

const at = new AfricasTalking('apiKey', 'username', 'from');
```

## Send SMS

### Send one message to one receipient

```typescript
at.sms('Hello there').to(254705459494).send();
```

### Send one message to many receipients

```typescript
at.sms('Hello customer.').to([254705459494, 254115911301]).send();
```

### Send unique messages to many receipients

### With template

```typescript
at.sendManyTemplateSms(
 "Hello :name, please pay KSh :amount",
 [
  { name: "Mauko", amount: 100, phoneNumber: 254705459494 },
  { name: "Mary", amount: 200, phoneNumber: 254115911301 },
 ],
 "phoneNumber"
);
```

### Predefined

```typescript
at.sendManyDefinedSms([
 { 254705459494: "Hello there Mauko" },
 { 254705459494: "Hi Mary" },
]);
```

## Check balance

```typescript
const balance = at.balance()
```
