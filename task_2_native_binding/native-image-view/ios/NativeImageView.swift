import UIKit
import ExpoModulesCore

class NativeImageView: ExpoView {
  private let imageView = UIImageView()

  required init(appContext: AppContext? = nil) {
    super.init(appContext: appContext)
    self.addSubview(imageView)
    imageView.contentMode = .scaleAspectFill
    imageView.clipsToBounds = true
  }

  override func layoutSubviews() {
    super.layoutSubviews()
    imageView.frame = self.bounds
  }

  func setImageUrl(_ url: URL) {
    let task = URLSession.shared.dataTask(with: url) { data, response, error in
      guard let data = data, error == nil else { return }
      DispatchQueue.main.async {
        self.imageView.image = UIImage(data: data)
      }
    }
    task.resume()
  }
}