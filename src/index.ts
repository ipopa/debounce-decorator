export function Debounce(debounceTime: number = 500) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor): PropertyDescriptor {
    let timeout: any;

    const initialMethod: Function = descriptor.value;

    descriptor.value = function (...args: any[]) {
      const method = initialMethod.bind(this);

      clearTimeout(timeout);

      timeout = setTimeout(
        () => {
          method(...args);
        },
        debounceTime,
      );
    };

    return descriptor;
  };
}
