package your.package.name

import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition

class NativeImageViewModule : Module() {
  override fun definition() = ModuleDefinition {
    Name("NativeImageView")

    View(NativeImageView::class) {
      Prop("imageUrl") { view: NativeImageView, url: String ->
        view.setImageUrl(url)
      }
    }
  }
}