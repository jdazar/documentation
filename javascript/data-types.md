# Tipos de Datos

JavaScript es un lenguaje de programación dinámico que soporta varios tipos de datos. Estos tipos de datos se pueden clasificar en dos categorías principales: tipos primitivos y tipos de objetos.

## Tipos Primitivos

### 1. `number`
El tipo `number` se utiliza para representar tanto números enteros como números de punto flotante. JavaScript no distingue entre estos dos tipos de números.

```javascript
let entero = 42;
let flotante = 3.14;
```

### 2. `string`
El tipo `string` se utiliza para representar secuencias de caracteres. Las cadenas de texto se pueden definir utilizando comillas simples ('), comillas dobles ("), o comillas invertidas (`).

```javascript
let simple = 'Hola';
let doble = "Mundo";
let invertida = `Hola Mundo`;
```

### 3. `boolean`
El tipo `boolean` tiene solo dos valores posibles: true o false. Se utiliza para representar valores de verdad.

``` javascript
let verdadero = true;
let falso = false;
```

### 4. `undefined`
El tipo `undefined` indica que una variable ha sido declarada pero aún no se le ha asignado un valor.

``` javascript
let indefinido;
console.log(indefinido); // undefined
```

### 5. `null`
El tipo `null` es un valor especial que representa la ausencia intencional de cualquier valor de objeto. Es diferente de `undefined`.

``` javascript
let nulo = null;
```

### 6. `symbol`
El tipo `symbol` se utiliza para crear identificadores únicos. Los símbolos son útiles para crear propiedades de objeto únicas.

``` javascript
let simbolo = Symbol('descripcion');
```

