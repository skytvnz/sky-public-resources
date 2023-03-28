function FindProxyForURL(url, host) {
    host = host.toLowerCase();

    if (dnsDomainIs(host, "digital-integration-test.skyone.co.nz") ||
        dnsDomainIs(host, "digital-integration-prelive.skyone.co.nz") ||
        dnsDomainIs(host, "digital-integration-preprod.skyone.co.nz") ||
        dnsDomainIs(host, "delivery-dev.skyone.co.nz") ||
        dnsDomainIs(host, "delivery-sit.skyone.co.nz") ||
        dnsDomainIs(host, "test-goskygo.skygo.co.nz") ||
        dnsDomainIs(host, "techradar.sky.co.nz") ||
        dnsDomainIs(host, "dev.sky.co.nz") ||
        dnsDomainIs(host, "prelive.sky.co.nz"))
        return "PROXY proxy.skytv.co.nz:8080"; // (IP:port)

    return "DIRECT";
}
