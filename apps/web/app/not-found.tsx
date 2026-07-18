import { Container } from '@/components/ui/container';
import { ButtonLink } from '@/components/ui/button';

export default function NotFound() {
  return (
    <section className="py-32">
      <Container className="max-w-lg text-center">
        <p className="text-sm font-semibold text-primary">404</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">Page not found</h1>
        <p className="mt-4 text-muted-foreground">
          The page you’re looking for doesn’t exist or has moved.
        </p>
        <div className="mt-8 flex justify-center">
          <ButtonLink href="/">Back home</ButtonLink>
        </div>
      </Container>
    </section>
  );
}
