# debounce-decorator

## Usage

```typescript
@Debounce() // debounce time = 500 ms (default)
search() {
}

@Debounce(2000) // debounce time = 2000 ms
search() {
}
```