export default async function NotFound() {
    await ms(5000)
    return <div>HOLA</div>
}

export function ms(timeout: number) {
    return new Promise<void>((resolve) => {
        const start = Date.now();
        setTimeout(() => {
            const end = Date.now();
            const remaining = timeout - (end - start);
            if (remaining > 0) {
                ms(remaining).then(resolve);
            } else {
                resolve();
            }
        }, timeout);
    });
}