# Course Details Page Redesign Plan

## Current Issues
1. **Poor Mobile Responsiveness**: Sections are misaligned and content overflows
2. **Performance Issues**: Too much content causing lag/hanging
3. **Layout Problems**: Sections moving far apart and getting misplaced
4. **Excessive Content**: Need better organization and progressive disclosure

## Redesign Strategy

### 1. **Mobile-First Responsive Design**
- Implement proper breakpoints (mobile: 320px+, tablet: 768px+, desktop: 1024px+)
- Stack sections vertically on mobile
- Reduce padding/spacing on small screens
- Make sticky navbar collapsible on mobile

### 2. **Performance Optimizations**
- Lazy load images and heavy components
- Reduce framer-motion animations on mobile
- Implement virtual scrolling for long lists
- Optimize marquee/carousel performance
- Limit initial content display with "Show More" functionality

### 3. **Layout Improvements**
- Consistent spacing system (4px, 8px, 12px, 16px, 24px, 32px)
- Proper grid system (12-column on desktop, single column on mobile)
- Fixed sticky navigation that works on all screen sizes
- Better section separation with clear visual hierarchy

### 4. **Content Organization**
- Hero section: Compact on mobile, full-featured on desktop
- Curriculum: Accordion-style with progressive disclosure
- Tools/Technologies: Grid layout that adapts to screen size
- Outcomes: Card-based layout with proper wrapping
- FAQ: Accordion with smooth animations
- Related courses: Horizontal scroll on mobile, grid on desktop

### 5. **Brand Colors**
- Primary: Blue-600 (#2563eb) - lighter blue
- Secondary: Orange (#FD5A1A)
- Gradients: Blue-to-orange for accents

## Implementation Checklist
- [ ] Optimize hero section for mobile
- [ ] Fix sticky navigation responsiveness
- [ ] Improve curriculum section layout
- [ ] Optimize tools/technologies display
- [ ] Enhance outcomes section
- [ ] Fix FAQ accordion
- [ ] Optimize related courses carousel
- [ ] Add lazy loading to images
- [ ] Reduce animations on mobile
- [ ] Test on multiple screen sizes
