import FingerprintJS from '@fingerprintjs/fingerprintjs';

async function getBrowserFingerprint() {
  const fpPromise = FingerprintJS.load();
  const fp = await fpPromise;
  const result = await fp.get();
  const visitorId = result.visitorId;
  return visitorId;
}

export default getBrowserFingerprint;