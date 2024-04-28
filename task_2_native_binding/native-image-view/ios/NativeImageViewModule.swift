import ExpoModulesCore

public class NativeImageViewModule: Module {
  public func definition() -> ModuleDefinition {
    Name("NativeImageView")

    View(NativeImageView.self) {
      Prop("imageUrl") { (view: NativeImageView, url: URL) in
        view.setImageUrl(url)
      }
    }
  }
}