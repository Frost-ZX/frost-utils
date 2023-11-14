/**
 * @description 将 IP 地址转换为广播地址
 * @param address 需要处理的 IP 地址
 * @param netmask 对应的子网掩码
 */
declare function toBroadcastAddress(address?: string, netmask?: string): string;

export default toBroadcastAddress;
