export function formatGreeting(name: string): string {
  const unusedGreeting = 'hello';
  console.log('formatGreeting called with', name);
  return `Welcome, ${name}!`;
}
