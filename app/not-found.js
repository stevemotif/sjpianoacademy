import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-ivory">
      <div className="text-center px-6">
        <div className="font-display text-[12rem] font-light text-ivory-dark leading-none select-none">
          404
        </div>
        <h1 className="font-display text-4xl font-light text-navy -mt-8 mb-3">
          Page Not Found
        </h1>
        <p className="font-body text-muted text-base mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link href="/" className="btn-primary text-xs">
          Return Home
        </Link>
      </div>
    </div>
  )
}
