import * as icons from 'lucide-vue-next'

export function getIconComponent(iconName) {
  return icons[iconName] || icons.Circle
}
