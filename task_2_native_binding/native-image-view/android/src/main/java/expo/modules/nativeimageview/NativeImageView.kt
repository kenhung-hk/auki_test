package your.package.name

import android.content.Context
import android.widget.ImageView
import com.bumptech.glide.Glide
import expo.modules.kotlin.views.ExpoView

class NativeImageView(context: Context) : ExpoView(context) {
  private val imageView = ImageView(context)

  init {
    addView(imageView)
    imageView.layoutParams = LayoutParams(LayoutParams.MATCH_PARENT, LayoutParams.MATCH_PARENT)
    imageView.scaleType = ImageView.ScaleType.CENTER_CROP
  }

  fun setImageUrl(url: String) {
    Glide.with(context).load(url).into(imageView)
  }
}