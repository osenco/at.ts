# at.ts
Africa's Talking TypeScript Package

## Install

```bash
yarn add '@osenco/at.ts'
```

## Initialize

```bash
import {useAfricasTalking}, ATConfig from '@osenco/at.ts'

const at = new useAfricasTalking({
username: '',
apiKey: '',
from: ''
})
```

## Send SMS

### Send one message to one 

```bash
at.to(254705459494).sms('Hello there').send();
````

### Send one message to many
```bash
at.to([254705459494, 254115911301]).smsMany('Hello there').send();
````

### Send unique messages

### With template

```bash
at.to([254705459494, 254115911301]).smsManyTemplate('Hello there', {name, amount}).send();
````

### Predefined

```bash
at.smsManyDefine({'254705459494':'Hello there']).send();
````

## Check balance

```bash
const balance = at.balance()
```
