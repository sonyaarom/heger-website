const base = process.env.NEXT_PUBLIC_BASE_PATH || ''

/** Paths under public/pics and public/vids for GitHub Pages (basePath). */
const PUBLIC_ASSET = /^\/(pics|vids)\//

export function assetUrl(path: string): string {
  if (!path || path.startsWith('http://') || path.startsWith('https://')) return path
  if (!PUBLIC_ASSET.test(path)) return path
  return `${base}${path}`
}

/** Deep-clone JSON content and prefix /pics/… and /vids/… with basePath when set. */
export function rewritePublicAssetPaths<T>(value: T): T {
  if (typeof value === 'string') {
    return assetUrl(value) as T
  }
  if (Array.isArray(value)) {
    return value.map(rewritePublicAssetPaths) as T
  }
  if (value !== null && typeof value === 'object') {
    const src = value as Record<string, unknown>
    const out: Record<string, unknown> = {}
    for (const k of Object.keys(src)) {
      out[k] = rewritePublicAssetPaths(src[k])
    }
    return out as T
  }
  return value
}
