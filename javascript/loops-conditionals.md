# Condicionales y Bucles

## Condicionales

### 1. if

### 2. if - else

### 3. if - else if - else

```javascript
if(light == "green") {
    console.log("Drive")
} else if (light == "orange") {
    console.log("Get ready")
} else if (light == "red") {
    console.log("Dont' drive")
} else {
    console.log("The car is not green, orange, or red");
}
```

### 4. Switch case

```javascript
switch(light) {
   case 'green':
       console.log("Drive");
       break;
   case 'orange':
       console.log("Get ready");
       break;
   case 'red':
       console.log("Don't drive");
       break;
   default:
       console.log('The light is not green, orange, or red');
       break;
}
```

## Bucles

### 1. Bucle `for`

```javascript
for (var firstNum = 0; firstNum < 2; firstNum++) {
    console.log(firstNum);
}
```

### 2. Bucle `while`

### 3. Bucles anidados

```javascript
for (var firstNum = 0; firstNum < 2; firstNum++) {
    for (var secondNum = 0; secondNum < 10; secondNum++) {
        console.log(firstNum + ", " + secondNum);
    }
}
```